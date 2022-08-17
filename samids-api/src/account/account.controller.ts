import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
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
}
