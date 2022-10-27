import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { AttendanceModule } from './attendance/attendance.module';
import { ScheduleModule } from './schedule/schedule.module';
import { AccountModule } from './account/account.module';
import { AccountService } from './account/account.service';
import { AttendanceService } from './attendance/attendance.service';
import { ImageModule } from './image/image.module';
import { ImageService } from './image/image.service';
import { MulterModule } from '@nestjs/platform-express';
import { FileInterceptorService } from './file/file.service';
import { FileSaverService } from './file/file-saver.service';
import { FileModule } from './file/file.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    AttendanceModule,
    ScheduleModule,
    AccountModule,
    ImageModule,
    FileModule,
    MulterModule.register({ dest: './uploads' }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AccountService,
    AttendanceService,
    ImageService,
    FileInterceptorService,
    FileSaverService,
  ],
})
export class AppModule {}
