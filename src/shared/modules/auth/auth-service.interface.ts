import { BaseUserEntity } from '../user/index.js';
import { LoginUserDto } from '../user/dto/login-user.dto.js';

export interface AuthService {
  authenticate(user: BaseUserEntity): Promise<string>;
  verify(dto: LoginUserDto): Promise<BaseUserEntity>;
}
