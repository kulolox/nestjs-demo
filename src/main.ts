import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { generteDocument } from './doc';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  generteDocument(app);
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
