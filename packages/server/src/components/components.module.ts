import { Module } from '@nestjs/common'
import { DAppModule } from './dapp/dapp.module'
import { UserModule } from './user/user.module'

@Module({
  imports: [DAppModule],
})
export class ComponentsModule {}
