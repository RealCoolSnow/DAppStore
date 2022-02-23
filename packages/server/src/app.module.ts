import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common'
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ComponentsModule } from './components/components.module'
import { ResponseExceptionFilter } from './common/filter/exception/response-exception.filter'
import { DatabaseModule } from './database/database.module'
import { RolesGuard } from './common/guard/roles.guard'
import { LoggerMiddleware } from './common/middleware/logger.middleware'
import { ResponseTransformInterceptor } from './common/interceptor/response-transform.interceptor'
import { AppI18nModule } from './common/app-i18n.module'

@Module({
  imports: [DatabaseModule, AppI18nModule, ComponentsModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: ResponseExceptionFilter,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseTransformInterceptor,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'user', method: RequestMethod.GET })
  }
}
