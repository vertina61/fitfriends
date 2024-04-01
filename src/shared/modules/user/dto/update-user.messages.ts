export const UpdateUserMessagesValid = {
  name: {
    invalid: 'name is required',
    lengthField: 'min length is 1, max is 15',
  },
  avatar: {
    invalidFormat: 'avatar must be jpg or png',
  },
  pol: {
    invalid: 'pol is required',
    invalidFormat: ' pol must be Женский Мужской Неважно',
  },
  date_of_birth: {
    invalidFormat: 'date_of_birth must be a valid ISO date',
  },
  about_me: {
    minLength: 'Minimum about_me length must be 10',
    maxLength: 'Maximum about_me length must be 140',
  },
  location: {
    invalid: 'location is required',
    invalidFormat: 'location must be Пионерская or Петроградская or Удельная or Звездная or Спортивная',
  },

} as const;
