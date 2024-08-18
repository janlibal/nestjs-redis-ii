import { Controller, Get, Post } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/test')
  test() {
    return 'this is a test message'
  }

  @Get('/me')
  async me() {
    return await this.appService.getSession()
  }

  @Post('/login')
  async login() {
    return await this.appService.setSession()
  }

  @Post('/logout')
  async logout() {
    return await this.appService.deleteSession()
  }
}
