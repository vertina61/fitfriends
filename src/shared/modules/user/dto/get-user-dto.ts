import { CreateCustomerUserDto } from './create-customer-user.dto.js';
import { CreateTrenerUserDto } from './create-trener-user.dto.js';
import { UserRolType } from '../../../types/user-rol.type.js';

export const getUserDtoByType = (userType: UserRolType) => {
  switch(userType) {
    case 'Пользователь':
      return CreateCustomerUserDto;
    case 'Тренер':
      return CreateTrenerUserDto;
  }
}
