import { MockServerData } from '../../types/index.js';
import { generateRandomValue, getRandomItem} from '../../helpers/index.js';
import { WorkoutGenerator } from './workout-generator.interface.js';
import { UserLevelType } from '../../types/user-level-type.enum.js';
import { TrainingType } from '../../types/training-type.enum.js';
import { GenderWorkoutType } from '../../types/gender-workout-type.enum.js';

const MIN_PRICE = 0;
const MAX_PRICE = 2000;

const MIN_CALLORIES = 1000;
const MAX_CALLORIES = 5000;

const MIN_RATING = 1;
const MAX_RATING = 5;

export class TSVWorkoutGenerator implements WorkoutGenerator {
  constructor(private readonly mockData: MockServerData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const image_for_page = getRandomItem<string>(this.mockData.image_for_pages);
    const user_level = getRandomItem([UserLevelType.Любитель, UserLevelType.Новичок, UserLevelType.Профессионал]);
    const training_type = getRandomItem([TrainingType.Аэробика, TrainingType.Бег, TrainingType.Бокс, TrainingType.Йога, TrainingType.Кроссфит, TrainingType.Пилатес, TrainingType.Стрейчинг]);
    const training_time = getRandomItem<string>(this.mockData.training_times);
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE).toString();
    const callories = generateRandomValue(MIN_CALLORIES, MAX_CALLORIES).toString();
    const description = getRandomItem<string>(this.mockData.descriptions);
    const gender = getRandomItem([GenderWorkoutType.Всех, GenderWorkoutType.Женщин, GenderWorkoutType.Мужчин]);
    const video = getRandomItem<string>(this.mockData.videos);
    const rating = generateRandomValue(MIN_RATING, MAX_RATING).toString();


    return [
      title, image_for_page, user_level,
      training_type, training_time, price,callories,description,gender, video,rating
    ].join('\t');
  }
}
