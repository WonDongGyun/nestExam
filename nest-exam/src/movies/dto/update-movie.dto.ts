import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { CreateMovieDTO } from './create-movie.dto';

// UpdateMovieDTO는  CreateMovieDTO와 구조가 같다.
// 단, 전부 필수로 작동할 필요는 없다는 점만 빼고.그래서 형태를 CreateMovieDTO로 만들고 굳이 안에는 필수일 필요가 없다라고 정의해준다.
export class UpdateMovieDTO extends PartialType(CreateMovieDTO) {}
