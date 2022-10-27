import { Module } from '@nestjs/common';
import { FileSaverService } from './file-saver.service';
import { FileInterceptorService } from './file.service';

@Module({
  providers: [FileInterceptorService, FileSaverService],
})
export class FileModule {}
