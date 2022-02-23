import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { CommonResponse } from '../response/common.response'
import { ErrorCode } from '../response/error-code'
import { ErrorResponse } from '../response/error.response'

export interface Response<T> {
  data: T
}

@Injectable()
export class ResponseTransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<Response<T>> {
    return next
      .handle()
      .pipe(
        map((data) =>
          data instanceof CommonResponse
            ? { code: data.code, data: data.data, msg: data.msg }
            : { data, code: ErrorCode.Success, msg: 'Success' }
        )
      )
  }
}
