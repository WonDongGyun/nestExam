import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateMovieDTO } from '../dto/create-movie.dto';
import { UpdateMovieDTO } from '../dto/update-movie.dto';
import { Movie } from '../entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.movieService.getAll();
  }

  // 나는 url의 id값을 얻고 싶고, id라는 파라미터에 저장하고 싶어
  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    return this.movieService.getone(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDTO) {
    return this.movieService.create(movieData);
  }

  @Delete(':id')
  removeMoive(@Param('id') movieId: number) {
    return this.movieService.deleteOne(movieId);
  }

  @Patch(':id')
  patchMovie(@Param('id') movieId: number, @Body() updateData: UpdateMovieDTO) {
    return this.movieService.update(movieId, updateData);
  }
}
