import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { instanceToPlain } from 'class-transformer';
import { Response } from 'express';
import { UPLOAD_PATH } from 'src/common/constants';
import { ApiFileDecorator } from 'src/common/decorators/api-file-decorators';
import { imageFileFilter } from 'src/common/utils/file-utils';
import { ResumeResponseDto } from './dto/resume-response-dto';

@Controller('resume')
@ApiTags('resume')
@ApiBearerAuth()
export class ResumeController {
  @Post('file')
  @ApiFileDecorator()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter: imageFileFilter,
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    const response = new ResumeResponseDto(file.originalname, file.filename);
    return instanceToPlain(response);
  }

  @Get(':path')
  viewImage(@Param('path') image: string, @Res() res: Response) {
    return res.sendFile(image, { root: UPLOAD_PATH });
  }
}
