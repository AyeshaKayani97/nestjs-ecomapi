import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginDto } from './dto/login.dto';
import { RefreshJwtGuard } from './guards/refresh.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/register")
  create(@Body() body: CreateAuthDto) {
    // console.log(body);
    return this.authService.create(body);
  }

  @Post("/login")
  login(@Body() body: LoginDto) {
    // console.log(body);
    return this.authService.login(body);
  }

  // @UseGuards(RefreshJwtGuard)
  // @Post("refresh")
  // async refreshToken(@Req() req){
  //   return await this.authService.refreshToken(req.user);

  // }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
