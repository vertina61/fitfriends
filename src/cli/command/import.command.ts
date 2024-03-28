import { Command } from './command.interface.js';
import { TSVFileReader } from '../../shared/libs/file-reader/index.js';
import { createWorkout, getErrorMessage, getMongoURI } from '../../shared/helpers/index.js';
import { UserService } from '../../shared/modules/user/user-service.interface.js';
import { WorkoutModel, WorkoutService } from '../../shared/modules/workout/index.js';
import { DatabaseClient, MongoDatabaseClient } from '../../shared/libs/database-client/index.js';
import { Logger } from '../../shared/libs/logger/index.js';
import { ConsoleLogger } from '../../shared/libs/logger/console.logger.js';
import { DefaultUserService, UserModel } from '../../shared/modules/user/index.js';
import { DEFAULT_DB_PORT, DEFAULT_USER_PASSWORD } from './command.constant.js';
import { WorkoutType } from '../../shared/types/workout-type.js';
import { DefaultWorkoutService } from '../../shared/modules/workout/default-workout.service.js';

export class ImportCommand implements Command {
  private userService: UserService;
  private workoutService: WorkoutService;
  private databaseClient: DatabaseClient;
  private logger: Logger;
  private salt: string;

  constructor() {
    this.onImportedLine = this.onImportedLine.bind(this);
    this.onCompleteImport = this.onCompleteImport.bind(this);

    this.logger = new ConsoleLogger();
    this.workoutService = new DefaultWorkoutService(this.logger, WorkoutModel);
    this.userService = new DefaultUserService(this.logger, UserModel);
    this.databaseClient = new MongoDatabaseClient(this.logger);
  }

  private async onImportedLine(line: string, resolve: () => void) {
    const workout = createWorkout(line);
    await this.saveWorkout(workout);
    resolve();
  }

  private onCompleteImport(count: number) {
    console.info(`${count} rows imported.`);
    this.databaseClient.disconnect();
  }

  private async saveWorkout(workout: WorkoutType) {
      const user = await this.userService.findOrCreate({
      ...workout.user,
      password: DEFAULT_USER_PASSWORD
    }, this.salt);


    await this.workoutService.create({
      userId: user.id,
      title: workout.title,
      image_for_page: workout.image_for_page,
      user_level: workout.user_level,
      training_type: workout.training_type,
      training_time: workout.training_time,
      price: workout.price,
      callories: workout.callories,
      description: workout.description,
      gender: workout.gender,
      video: workout.video,
      rating: workout.rating,
      user: workout.user,
    });

  }

  public getName(): string {
    return '--import';
  }

  public async execute(filename: string, login: string, password: string, host: string, dbname: string, salt: string): Promise<void> {
    const uri = getMongoURI(login, password, host, DEFAULT_DB_PORT, dbname);
    this.salt = salt;

    await this.databaseClient.connect(uri);
    const fileReader = new TSVFileReader(filename.trim());

    fileReader.on('line', this.onImportedLine);
    fileReader.on('end', this.onCompleteImport);

    try {
      await fileReader.read();
    } catch (error) {

      console.error(`Can't import data from file: ${filename}`);
      console.error(getErrorMessage(error));
    }
  }
}
