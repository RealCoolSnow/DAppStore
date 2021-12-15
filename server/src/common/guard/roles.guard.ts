import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Observable } from 'rxjs'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler())
    if (!roles) {
      return true
    }
    const request = context.switchToHttp().getRequest()
    const user = { roles: ['admin'] } //request.user
    return this.matchRoles(roles, user.roles)
  }
  private matchRoles(roles: string[], userRoles: string[]): boolean {
    let allow = true
    for (const role of userRoles) {
      if (!roles.includes(role)) {
        allow = false
        break
      }
    }
    return allow
  }
}
