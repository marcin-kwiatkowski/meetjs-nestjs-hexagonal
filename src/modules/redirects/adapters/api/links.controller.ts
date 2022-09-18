import { Controller, Get, NotFoundException, Param, Res } from '@nestjs/common';
import { RedirectsPort } from '../../core/ports/redirects.port';

@Controller('/links')
export class LinksController {
  constructor(private readonly redirectsService: RedirectsPort) {}

  @Get(':key')
  public async redirect(
    @Param('key') key: string,
    @Res()
    response: { redirect: (code: number, url: string) => Response },
  ) {
    const existingRedirect = await this.redirectsService.findByKey(key);

    if (!existingRedirect) {
      throw new NotFoundException();
    }

    return response.redirect(301, existingRedirect.originalUrl);
  }
}
