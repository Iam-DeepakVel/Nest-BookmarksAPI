import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    // Allows only properties defined in dto class, remove the extra property that incoming without passing error to client 
    whitelist:true,
    // It passes error to the client if they sent properties that not defined in dto object
    // forbidNonWhitelisted:true
  }))
  await app.listen(8080);
}
bootstrap();
