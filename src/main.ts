import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import { AppModule } from './app.module';
import { generteDocument } from './doc';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  generteDocument(app);

  app.use(session({ secret: 'kulolo', rolling: true, name: 'kulolo.sid', cookie: { maxAge: 999999 } }));
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
