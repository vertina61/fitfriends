
import { GenderType } from "../types/gender-type.enum.js";
import { GenderWorkoutType } from "../types/gender-workout-type.enum.js";
import { LocationType } from "../types/location-type.enum.js";
import { TrainingType } from "../types/training-type.enum.js";
import { UserLevelType } from "../types/user-level-type.enum.js";
import { WorkoutType } from "../types/workout-type.js";
import { UserRolType } from "../types/user-rol.type.js";

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
      name,
      email,
      avatar,
      pol,
      date_of_birth,
      user_type,
      about_me,
      location,
      image_page,
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
        rating:Number.parseInt(rating, 10),
        user: {name,
        email,
        avatar,
        pol: GenderType[pol as 'Женский' | 'Мужской' | 'Неважно'],
        date_of_birth: new Date(date_of_birth),
        user_type: UserRolType[user_type as 'Пользователь' | 'Тренер'],
        about_me,
        location: LocationType[location as 'Пионерская' | 'Петроградская' | 'Удельная' | 'Звездная' | 'Спортивная'],
        image_page,}
          };
    }
