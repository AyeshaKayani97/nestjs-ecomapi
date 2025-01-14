import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from 'src/models/role.enum';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector:Reflector){}
  canActivate(
    context: ExecutionContext,
  ): boolean  {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY,[
      context.getHandler(),
      context.getClass()

    ])
    console.log("--------------------requiredRoles-------------------------")
    if(!requiredRoles){
    return true;
    }
    const {user} = context.switchToHttp().getRequest();
    if (!user) {
      console.log("User object is undefined");
      return false;
    }
    // some() is going to return either true or false 
    console.log("--------------------some()----method of an array---------------------")

    return requiredRoles.some(role=>user.role?.includes(role));

  }
}
