import { SystemMessage } from '../model/system_message.model';
import { Account } from '../model/account.model';
import { Attendance } from '../model/attendance.model';

export class Helper {
  private static systemMessage = new SystemMessage();

  static genID(): number {
    var datum = Date.parse(new Date().toString());
    return datum / 1000;
  }

  static validAccountBody(body: any) {
    var systemMessage = new SystemMessage();

    var keys: Array<string> = Helper.describeClassUser();
    var types: Map<string, string> = new Map<string, string>();

    types.set('firstName', typeof '');
    types.set('lastName', typeof '');
    types.set('uid', typeof 0);
    types.set('email', typeof '');

    for (const key of Object.keys(body)) {
      if (!keys.includes(`${key}`) && typeof body[key] != types.get(key)) {
        throw systemMessage.error(502);
      }
      if (typeof body[key] != types.get(key)) {
        console.log(body[key]);
        console.log(types.get(key));
        throw this.systemMessage.custom({
          success: false,
          data: `${key} is not a valid attribute`,
        });
      }
    }
  }
  static genPassword() {
    var chars =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var passwordLength = 8;
    var password = '';
    for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }

    return password;
  }
  static describeClassUser(): Array<any> {
    let a = new Account('', '', 123, '');
    let array = Object.getOwnPropertyNames(a);

    return array;
  }

  ///
  // static validAttendanceBody(body: any) {
  //   console.log(body);
  //   var systemMessage = new SystemMessage();

  //   var keys: Array<string> = Helper.describeClassAttendance();
  //   var types: Map<string, string> = new Map<string, string>();

  //   types.set('attendanceID', typeof 0);
  //   types.set('name', typeof '');
  //   types.set('employeeID', typeof 0);
  //   types.set('date', typeof '');
  //   types.set('time', typeof '');
  //   types.set('classcode', typeof 0);
  //   types.set('department', typeof '');
  //   types.set('remarks', typeof '');

  //   for (const key of Object.keys(body)) {
  //     // if (!keys.includes(`${key}`) && typeof body[key] != types.get(key)) {
  //     //   throw systemMessage.error(502);
  //     // }
  //     if (typeof body[key] != types.get(key)) {
  //       console.log(body[key]);
  //       console.log(types.get(key));
  //       throw this.systemMessage.custom({
  //         success: false,
  //         data: `${key} is not a valid attribute`,
  //       });
  //     }
  //   }
  // }

  // static describeClassAttendance(): Array<any> {
  //   // let a = new Attendance(123, '', 123, '', '', 123, '', '');
  //   let array = Object.getOwnPropertyNames(a);

  //   return array;
  // }
}
