export class CommonResponse {
  readonly code: number
  readonly msg: string
  readonly data?: any
  constructor(code: number, msg: string = '', data?: any) {
    this.code = code
    this.msg = msg
    this.data = data
  }
}
