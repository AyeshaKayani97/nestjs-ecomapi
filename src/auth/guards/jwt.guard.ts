import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return super.canActivate(context);
  }
}



// import {
//     CanActivate,
//     ExecutionContext,
//     Injectable,
//     UnauthorizedException,
//   } from '@nestjs/common';
//   import { JwtService } from '@nestjs/jwt';
//   import { Request } from 'express';
  
//   @Injectable()
//   export class JwtGuard implements CanActivate {
//     static JwtStrategy: Provider;
//     constructor(private jwtService: JwtService) {}
//     async canActivate(context: ExecutionContext): Promise<boolean> {
//       const request = context.switchToHttp().getRequest();
//       const token = this.extractTokenFromHeader(request);
  
//       if (!token) throw new UnauthorizedException();
  
//       try {
//         const payload = await this.jwtService.verifyAsync(token, {
//           secret: process.env.JWT_SECRET,
//         });
//         console.log(payload);
//         request['user'] = payload;
//         console.log(payload);

//       } catch {
//         throw new UnauthorizedException();
//       }
  
//       return true;
//     }
  
//     private extractTokenFromHeader(request: Request) {
//       const [type, token] = request.headers.authorization?.split(' ') ?? [];
//       return type === 'Bearer' ? token : undefined;
//     }
//   }