
import { GenderWorkoutType } from "../types/gender-workout-type.enum.js";
import { TrainingType } from "../types/training-type.enum.js";
import { UserLevelType } from "../types/user-level-type.enum.js";
import { WorkoutType } from "../types/workout-type.js";

export function createWorkout(workoutData: string): WorkoutType {
    const [
      title,
      image_for_page,
      user_level,
      training_type,
      training_time,
      price,
      callories,
      description,
      gender,
      video,
      rating,
        ] = workoutData.replace('\n', '').split('\t');

    return {
        title,
        image_for_page,
        user_level: UserLevelType[user_level as 'Новичок' | 'Любитель' | 'Профессионал'],
        training_type: TrainingType[training_type as 'Йога' | 'Бег' | 'Бокс' | 'Стрейчинг' | 'Кроссфит' | 'Аэробика' | 'Пилатес'],
        training_time,
        price: Number.parseInt(price, 10),
        callories: Number.parseInt(callories, 10),
        description,
        gender: GenderWorkoutType[gender as 'Женщин' | 'Мужчин' | 'Всех'],
        video,
        rating:Number.parseInt(rating, 10),      };
    }
