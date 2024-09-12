import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @MinLength(2, { message: 'Name must have atleast 2 characters.' })
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @IsEmail(null, { message: 'Please provide valid Email.' })
  email: string;

  @IsInt()
  age: number;

  @IsString()
  @IsEnum(['f', 'm', 'u'])
  gender: string;
}
