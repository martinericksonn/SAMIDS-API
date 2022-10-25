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

@Controller('image')
export class ImageController {
  @Post('upload')
  @UseGuards(AuthGuard('api-key'))
  @UseInterceptors(FileInterceptor('file'))
  uploadImage(
    @UploadedFile()
    file: Express.Multer.File,
  ) {
    console.log('file', file);
    return 'File received';
  }
}
