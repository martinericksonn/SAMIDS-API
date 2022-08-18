import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AttendanceService } from './attendance.service';

@Controller('attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Post('/add')
  @UseGuards(AuthGuard('api-key'))
  addAttendance(@Body() body: any) {
    return this.attendanceService.addAttendance(body);
  }

  @Get('/get/all')
  @UseGuards(AuthGuard('api-key'))
  getAllAttendances() {
    return this.attendanceService.getAllAttendances();
  }
}
