import { Module } from '@nestjs/common';
import { RedirectsController } from './adapters/api/redirects.controller';
import { RedirectsPort } from './core/ports/redirects.port';
import { RedirectsService } from './core/application/redirects.service';

@Module({
  controllers: [RedirectsController],
  providers: [
    {
      provide: RedirectsPort,
      useClass: RedirectsService,
    },
  ],
})
export class RedirectsModule {}
