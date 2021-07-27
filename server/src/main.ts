import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = new DocumentBuilder()
  .setTitle('Pague leve api')
  .setDescription('Api para teste tecnico')
  .setVersion('3.0')
  .addBearerAuth(
    {type: 'http', scheme: 'bearer', bearerFormat: 'Token'}, 'token'
  )
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3333);
}
bootstrap();
