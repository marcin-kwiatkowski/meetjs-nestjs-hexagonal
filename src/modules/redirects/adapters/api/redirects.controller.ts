import { Body, Controller, Post } from '@nestjs/common';
import { RedirectsPort } from '../../core/ports/redirects.port';
import { CreateRedirectDto } from './dto/create-redirect.dto';
import { RedirectDto } from './dto/redirect.dto';

@Controller('/redirects')
export class RedirectsController {
  constructor(private readonly redirectsService: RedirectsPort) {}

  @Post()
  public async createRedirect(
    @Body() payload: CreateRedirectDto,
  ): Promise<RedirectDto> {
    const redirect = await this.redirectsService.findOrCreate(payload.url);
    return RedirectDto.fromBusinessObject(redirect);
  }
}
