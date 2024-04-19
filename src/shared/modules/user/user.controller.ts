import { inject, injectable } from 'inversify';
import { Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import {
  BaseController,
  HttpError,
  HttpMethod,
  PrivateRouteMiddleware,
  ValidateDtoMiddleware,
  ValidateObjectIdMiddleware,
} from '../../libs/rest/index.js';
import { Logger } from '../../libs/logger/index.js';
import { Component} from '../../types/index.js';
import { CreateUserRequest } from './create-user-request.type.js';
import { UserService } from './user-service.interface.js';
import { Config, RestSchema } from '../../libs/config/index.js';
import { fillDTO } from '../../helpers/index.js';
import { UserRdo } from './rdo/user.rdo.js';
import { LoginUserRequest } from './login-user-request.type.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { LoginUserDto } from './dto/login-user.dto.js';
import { AuthService } from '../auth/index.js';
import { LoggedUserRdo } from './rdo/logged-user.rdo.js';
import { ParamUserId } from './index.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { DetailUserRdo } from './rdo/detail-user.rdo.js';

@injectable()
export class UserController extends BaseController {
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.UserService) private readonly userService: UserService,
    @inject(Component.Config) private readonly configService: Config<RestSchema>,
    @inject(Component.AuthService) private readonly authService: AuthService,
  ) {
    super(logger);
    this.logger.info('Register routes for UserController…');

    this.addRoute({ path: '/', method: HttpMethod.Get, handler: this.index });
    this.addRoute({ path: '/register', method: HttpMethod.Post, handler: this.create, middlewares: [new ValidateDtoMiddleware(CreateUserDto), ] });
    this.addRoute({ path: '/login', method: HttpMethod.Post, handler: this.login, middlewares: [new ValidateDtoMiddleware(LoginUserDto)] });
    this.addRoute({ path: '/login', method: HttpMethod.Get,  handler: this.checkAuthenticate});
    this.addRoute({ path: '/:userId', method: HttpMethod.Get, handler: this.show, middlewares: [
      new ValidateObjectIdMiddleware('userId'),
          ] });
    this.addRoute({ path: '/:userId', method: HttpMethod.Patch, handler: this.update, middlewares: [new PrivateRouteMiddleware(),new ValidateObjectIdMiddleware('userId'),new ValidateDtoMiddleware(UpdateUserDto)] });

  }


  public async index(_req: Request, res: Response) {
    const users = await this.userService.find();
    this.ok(res, fillDTO(UserRdo, users));
  }

  public async create(
    { body }: CreateUserRequest,
    res: Response,
  ): Promise <void> {
    const existsUser = await this.userService.findByEmail(body.email);

    if (existsUser) {
      throw new HttpError(
        StatusCodes.CONFLICT,
        `User with email «${body.email}» exists.`,
        'UserController'
      );
    }

    const result = await this.userService.create(body, this.configService.get('SALT'));
    this.created(res, fillDTO(UserRdo, result));
  }


  public async update({ body, params }: Request<ParamUserId, unknown, UpdateUserDto>, res: Response): Promise<void> {
    const updatedUser = await this.userService.updateById(params.userId, body);

    this.ok(res, fillDTO(UserRdo, updatedUser));
  }

  public async login(
    { body }: LoginUserRequest,
    res: Response,
  ): Promise<void> {
    const user = await this.authService.verify(body);
    const token = await this.authService.authenticate(user);
    const responseData = fillDTO(LoggedUserRdo, {
      email: user.email,
      token,
    });
    this.ok(res, responseData);
  }


  public async checkAuthenticate({ tokenPayload: { email }}: Request, res: Response) {
    const foundedUser = await this.userService.findByEmail(email);

    if (! foundedUser) {
      throw new HttpError(
        StatusCodes.UNAUTHORIZED,
        'Unauthorized',
        'UserController'
      );
    }

    this.ok(res, fillDTO(LoggedUserRdo, foundedUser));
  }
  public async show({ params: {userId} }: Request<ParamUserId>, res: Response): Promise<void> {
    const user = await this.userService.findById(userId);
    this.ok(res, fillDTO(DetailUserRdo, user));

  }



}
