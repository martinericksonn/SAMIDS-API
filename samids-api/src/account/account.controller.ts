import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AccountService } from './account.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post('/add')
  @UseGuards(AuthGuard('api-key'))
  addAccount(@Body() body: any) {
    return this.accountService.addAccount(body);
  }

  @Get('/get/all')
  @UseGuards(AuthGuard('api-key'))
  getAllAccount() {
    return this.accountService.getAllAccounts();
  }

  @Get('/get/:uid')
  @UseGuards(AuthGuard('api-key'))
  getAccount(@Param('uid') uid: string) {
    return this.accountService.getAccount(uid);
  }
}
