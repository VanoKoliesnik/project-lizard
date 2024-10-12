import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { config } from 'dotenv';

async function bootstrap() {
  config();

  const app = await NestFactory.create(AppModule);

  const { SERVICE_PORT, SERVICE_HOST, SERVICE_NAME, BUILD_DOCS } = process.env;

  if (BUILD_DOCS === 'true') {
    const documentBuilder = new DocumentBuilder()
      .setTitle(`${SERVICE_NAME} API`)
      .setDescription(`Serves ${SERVICE_NAME} application`)
      .setVersion('v1');

    const configDocumentation = documentBuilder.build();

    const document = SwaggerModule.createDocument(app, configDocumentation);

    SwaggerModule.setup('api', app, document, {
      customSiteTitle: `${SERVICE_NAME} - OpenAPI`,
    });
  }

  await app.listen(SERVICE_PORT || 5000, SERVICE_HOST || '0.0.0.0');
}
bootstrap();
