import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies_Controller/movies.module';

// @이거를 데코레이트라고 부른다. 어노테이션 아님 ㅎㅎ 클래스에 함수기능을 추가할 수 있다.
// 컨트롤러는 기본적으로 url을 가져와서 함수를 실행함. 라우터 같은 존재힙니다
@Module({
  imports: [MoviesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
