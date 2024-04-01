import { DocumentType } from '@typegoose/typegoose';
import { BaseUserEntity } from './base-user.entity.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';

export interface UserService {
  create(dto: CreateUserDto, salt: string): Promise<DocumentType<BaseUserEntity>>;
  findByEmail(email: string): Promise<DocumentType<BaseUserEntity> | null>;
  findOrCreate(dto: CreateUserDto, salt: string): Promise<DocumentType<BaseUserEntity>>;
  updateById(userId: string, dto: UpdateUserDto): Promise<DocumentType<BaseUserEntity> | null>;
  find(): Promise<DocumentType<BaseUserEntity>[]>;
  findById(userId: string): Promise<DocumentType<BaseUserEntity> | null>;
}
