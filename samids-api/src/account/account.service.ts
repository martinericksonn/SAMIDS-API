import { Injectable } from '@nestjs/common';
import { DatabaseQuery } from 'src/functions/firebase.database';
import { Helper } from 'src/functions/helper';
import { Account } from 'src/model/account.model';

@Injectable()
export class AccountService {
  async addAccount(body: any) {
    try {
      body.uid = Helper.genID();

      Helper.validAccountBody(body);

      var newAccount: Account = new Account(
        body.firstName,
        body.lastName,
        body.uid,
        body.email,
        body.profile ?? [],
      );
      1;

      console.log(body);
      //   return await DatabaseQuery.commit(newAccount);
    } catch (error) {
      return error;
    }
  }
}
