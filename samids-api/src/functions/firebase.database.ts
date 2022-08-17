import 'firebase/auth';
import 'firebase/firestore';
import { Account } from 'src/model/account.model';
import { CRUDReturn } from 'src/model/crud_return.interface';
import { SystemMessage } from 'src/model/system_message.model';

const admin = require('firebase-admin');
const systemMessage = new SystemMessage();
const accounts = 'accounts';
const attendance = 'attendance';

export class DatabaseQuery {
  static async commit(account: Account): Promise<CRUDReturn> {
    try {
      console.log(account.toJson());
      var db = admin.firestore();
      await db
        .collection(accounts)
        .doc(account.uid.toString())
        .set(account.toJson());
      console.log('not error');
      return systemMessage.success(account.toJson());
    } catch (error) {
      console.log(error);
      return systemMessage.error(error);
    }
  }
}
