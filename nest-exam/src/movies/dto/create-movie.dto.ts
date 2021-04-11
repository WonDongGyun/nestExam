import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDTO {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
  // ?는 필수일 필요는 없다는 뜻이다.
  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}
