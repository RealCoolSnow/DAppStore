import { Controller, Get, Param } from '@nestjs/common'
import { DAppService } from './dapp.service'
import { Category } from './entity/category.entity'
import { Dapp } from './entity/dapp.entity'

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
  @Get('dapp_by_category/:id')
  async getDappByCategory(@Param('id') id: number): Promise<Dapp[]> {
    const list = await this.dappService.getDapps({ category_id: id })
    return list
  }
  @Get('dapp_by_key/:key')
  async getDappByKey(@Param('key') key: string): Promise<Dapp[]> {
    const list = await this.dappService.getDapps({ hash_key: key })
    return list
  }
}
