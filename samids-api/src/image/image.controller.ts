import {
  Body,
  Controller,
  HttpStatus,
  ParseFilePipeBuilder,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('image')
export class ImageController {
  constructor(
    private fileSaverService: FileSaverServicece,
    private fileInterceptorService: FileInterceptorServiceeptorService,
  ) {}

  @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return 'File received';
  }

  @Post('test')
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile() file) {
    console.log(file);
  }

  @Post('upload')
  @UseGuards(AuthGuard('api-key'))
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    console.log('file', file);
    return 'upload received';
  }
}
