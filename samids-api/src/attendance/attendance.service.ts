import { Injectable } from '@nestjs/common';
import { AccountService } from 'src/account/account.service';
import { DatabaseQuery } from 'src/functions/firebase.database';
import { Helper } from 'src/functions/helper';
import { Attendance } from 'src/model/attendance.model';
import { SystemMessage } from 'src/model/system_message.model';

@Injectable()
export class AttendanceService {
  accountService = new AccountService();
  systemMessage = new SystemMessage();

  async addAttendance(body: any) {
    try {
      return await this.accountService
        .getAccount(body.uid.toString())
        .then(async (value: any) => {
          if (value.success) {
            body.ref = Helper.ref();
            Helper.validAttendanceBody(body);

            var newAttendance: Attendance = new Attendance(
              body.ref,
              body.uid,
              body.date,
              body.time,
              body.classcode,
              body.remarks,
            );

            return await DatabaseQuery.commitAttendance(newAttendance);
          } else {
            throw this.systemMessage.error('account uid not found');
          }
        });
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getAllAttendances() {
    try {
      return await DatabaseQuery.getAllAttendances();
    } catch (error) {
      return error;
    }
  }

  async getAttendanceByRoom(id) {
    try {
      return await DatabaseQuery.getAttendanceByRoom(id);
    } catch (error) {
      return error;
    }
  }
}
