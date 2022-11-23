import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
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

  //get all by room
  @Get('/get/all/:classcode')
  @UseGuards(AuthGuard('api-key'))
  getAttendanceByRoom(@Param('classcode') classcode: string) {
    return this.attendanceService.getAttendanceByRoom(classcode);
  }

  //get by id
  @Get('get/:id')
  @UseGuards(AuthGuard('api-key'))
  getAttendanceById(@Param('id') id: number) {
    return this.attendanceService.getAttendanceById(id);
  }
}
