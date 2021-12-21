import { Controller, Get } from '@nestjs/common'

@Controller('dapp')
export class DAppController {
  @Get()
  async home(): Promise<String> {
    return 'aaa'
  }
}
