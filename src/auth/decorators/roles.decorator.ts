import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/models/role.enum';

Role
 export const ROLES_KEY ="roles";

//  This line defines a decorator factory function named Roles. It takes a variable number of arguments (denoted by the rest parameter syntax ...roles), 
// which are expected to be of type Role. Inside the function, it calls SetMetadata, passing ROLES_KEY and the roles array as arguments.

export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
