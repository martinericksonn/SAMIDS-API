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

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    AttendanceModule,
    ScheduleModule,
    AccountModule,
  ],
  controllers: [AppController],
  providers: [AppService, AccountService, AttendanceService],
})
export class AppModule {}
