import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DAppController } from './dapp.controller'
import { DAppService } from './dapp.service'
import { Category } from './entity/category.entity'
import { Dapp } from './entity/dapp.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Category, Dapp])],
  controllers: [DAppController],
  providers: [DAppService],
})
export class DAppModule {}
