import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 클라이언트가 서버에게 데이터를 보낼때 dto하나만 있어서는 유효성을 검사할 수 없다.
  // 따라서 nest의 파이프 라는 기능을 사용해서 유효성 검사를 실시한다.
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 만약 dto와 형식이 맞지 않는다면, 아예 validate 까지도 못오게 막아버리기~
      forbidNonWhitelisted: true, // 보안을 1단계 올려봅시다
      transform: true, // 해당 데이터를 우리가 원하는 실제 데이터로 바꿔줍니다. 예를들어, url에 포함되는 param값은 무조건 string으로 들어와서 number로 받을 수 없는데, 이것이 존재하면 가능합니다~
    }),
  );
  await app.listen(3000);
}
bootstrap();
