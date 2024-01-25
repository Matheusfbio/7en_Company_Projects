import { Module } from '@nestjs/common';
import { ResumeController } from './resume.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { UPLOAD_PATH } from 'src/common/constants';
import { editFileName } from 'src/common/utils/file-utils';

@Module({
  imports: [
    TypeOrmModule.forFeature([]),
    MulterModule.register({
      storage: diskStorage({
        destination: UPLOAD_PATH,
        filename: editFileName,
      }),
    }),
  ],
  controllers: [ResumeController],
  providers: [],
})
export class ResumeModule {}
