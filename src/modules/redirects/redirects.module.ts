import { Module } from '@nestjs/common';
import { RedirectsController } from './adapters/api/redirects.controller';
import { RedirectsPort } from './core/ports/redirects.port';
import { RedirectsService } from './core/application/redirects.service';
import { PrismaService } from '../prisma/prisma.service';
import { RedirectsRepositoryPort } from './core/ports/redirects-repository.port';
import { RedirectsPrismaRepository } from './adapters/repositories/redirects.prisma-repository';

@Module({
  controllers: [RedirectsController],
  providers: [
    {
      provide: RedirectsRepositoryPort,
      useClass: RedirectsPrismaRepository,
    },
    {
      provide: RedirectsPort,
      useClass: RedirectsService,
    },
    PrismaService,
  ],
})
export class RedirectsModule {}
