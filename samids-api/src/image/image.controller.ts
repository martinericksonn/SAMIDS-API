import {
  Controller,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

import { Request } from 'express';
import { FileSaverService } from 'src/file/file-saver.service';
import { FileInterceptorService } from 'src/file/file.service';

@Controller('image')
export class ImageController {
  constructor(
    private fileSaverService: FileSaverService,
    private fileInterceptorService: FileInterceptorService,
  ) {}

  @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return 'File received';
  }

  @Post('upload')
  async uploadFilee(@Req() req: Request) {
    const { files, fields } =
      await this.fileInterceptorService.interceptRequest(req);

    const folder: string = `path/to/store`;

    await this.asyncForEach(files, async (file) => {
      this.fileSaverService.saveFile(file.fileName, file.mimeType, folder);
    });

    this.fileInterceptorService.deleteFiles(files);
  }

  async asyncForEach(
    array: Array<any>,
    callback: (item: any, index: number, array: Array<any>) => void,
  ): Promise<void> {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

  @Post('uploads')
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
