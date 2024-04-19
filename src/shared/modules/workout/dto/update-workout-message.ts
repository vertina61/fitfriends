export const UpdateWorkoutValidationMessage = {
  title: {
    minLength: 'Minimum title length must be 1',
    maxLength: 'Maximum title length must be 15',
  },
  user_level: {
    invalidFormat: 'user_level must be Новичок Любитель Профессионал',
  },
  training_type: {
    invalidFormat: 'training_type must be Йога or Бег or Бокс Стрейчинг Кроссфит Аэробика Пилатес',
  },
  callories:{
    minValue: 'Minimum callories length must be 1000',
    maxValue: 'Maximum callories length must be 5000'
  },
  description: {
    invalid: 'description is required',
    minLength: 'Minimum description length must be 10',
    maxLength: 'Maximum description length must be 140',
  },
  gender: {
    invalid: 'gender is required',
    invalidFormat: 'Type must be Для женщин or Для мужчин or Для всех',
  },
  video: {
    invalid: 'video is required',
  }
} as const;
