import { ConsoleLogger } from '@nestjs/common';
import 'firebase/auth';
import 'firebase/firestore';
import { Account } from 'src/model/account.model';
import { Attendance } from 'src/model/attendance.model';
import { CRUDReturn } from 'src/model/crud_return.interface';
import { SystemMessage } from 'src/model/system_message.model';

const admin = require('firebase-admin');
const systemMessage = new SystemMessage();
const accounts = 'accounts';
const attendance = 'attendance';

export class DatabaseQuery {
  static async commit(account: Account): Promise<CRUDReturn> {
    try {
      var db = admin.firestore();
      await db
        .collection(accounts)
        .doc(account.uid.toString())
        .set(account.toJson());
      return systemMessage.success(account.toJson());
    } catch (error) {
      console.log(error);
      return systemMessage.error(error);
    }
  }

  static async commitAttendance(attendances: Attendance): Promise<CRUDReturn> {
    try {
      var db = admin.firestore();
      await db
        .collection(attendance)
        .doc(attendances.ref.toString())
        .set(attendances.toJson());
      return systemMessage.success(attendances.toJson());
    } catch (error) {
      console.log(error);
      return systemMessage.error(error);
    }
  }

  static async getUser(id: string) {
    try {
      var db = admin.firestore();
      var userRef = await db.collection(accounts).doc(id).get();
      if (!userRef.exists) {
        throw systemMessage.error(506);
      }

      return systemMessage.success(userRef.data());
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
