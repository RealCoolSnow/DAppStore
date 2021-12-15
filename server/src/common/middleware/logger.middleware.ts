import { Injectable, NestMiddleware } from '@nestjs/common'
import { NextFunction, Request, Response } from 'express'

const TAG = 'LoggerMiddleware'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(TAG, 'Request:', req.headers['user-agent'])
    next()
  }
}
