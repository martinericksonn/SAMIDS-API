import { Module } from '@nestjs/common';
import { FileSaverService } from 'src/file/file-saver.service';
import { FileInterceptorService } from 'src/file/file.service';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';

@Module({
  controllers: [ImageController],
  providers: [ImageService, FileInterceptorService, FileSaverService],
})
export class ImageModule {}
