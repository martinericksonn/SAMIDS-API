import {
  Body,
  Controller,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('image')
export class ImageController {
  @Post('/add')
  @UseGuards(AuthGuard('api-key'))
  @UseInterceptors(FileInterceptor('file'))
  addAttendance(@Body() body: Express.Multer.File) {
    return 'File received';
  }
}
