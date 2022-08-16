import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { AttendanceModule } from './attendance/attendance.module';
import { ScheduleModule } from './schedule/schedule.module';
import { AccountsModule } from './accounts/accounts.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, AttendanceModule, ScheduleModule, AccountsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
