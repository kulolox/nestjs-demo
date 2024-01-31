import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import * as fs from 'fs';
import * as packageConfig from '../package.json';

export const generteDocument = (app) => {
  const options = new DocumentBuilder()
    .setTitle(packageConfig.name)
    .setDescription(packageConfig.description)
    .setVersion(packageConfig.version)
    .addBasicAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  // 本地json
  // fs.writeFileSync('./swagger-spec.json', JSON.stringify(document));
  // host/api/doc-json(json直链,可直接导入apifox)
  SwaggerModule.setup('/api/doc', app, document);
};
