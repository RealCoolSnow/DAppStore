import { Controller, Get } from '@nestjs/common'
import { DAppService } from './dapp.service'
import { Category } from './entity/category.entity'

@Controller('dapp')
export class DAppController {
  constructor(private readonly dappService: DAppService) {}
  @Get('categories')
  async getCategories(): Promise<Category[]> {
    return this.dappService.getCategories()
  }
  @Get('home')
  async getHome(): Promise<{}> {
    const category_list = await this.dappService.getCategories()
    const all_dapps = await this.dappService.getDapps()
    const feature_dapps = await this.dappService.getDapps({ status: 2 })
    return { category_list, all_dapps, feature_dapps }
  }
}
