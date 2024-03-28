import { DocumentType } from '@typegoose/typegoose';
import { BaseUserEntity } from './base-user.entity.js';
import { CreateUserDto } from './dto/create-user.dto.js';

export interface UserService {
  create(dto: CreateUserDto, salt: string): Promise<DocumentType<BaseUserEntity>>;
  findByEmail(email: string): Promise<DocumentType<BaseUserEntity> | null>;
  findOrCreate(dto: CreateUserDto, salt: string): Promise<DocumentType<BaseUserEntity>>;

}
