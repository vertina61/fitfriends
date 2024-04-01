export const CreateUserMessagesValid = {
  name: {
    invalid: 'name is required',
    lengthField: 'min length is 1, max is 15',
  },
  email: {
    invalid: 'email is required',
    invalidFormat: 'email must be a valid address'
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
  password: {
    invalid: 'password is required',
    lengthField: 'min length for password is 6, max is 12'
  },
} as const;
