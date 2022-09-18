import { Injectable } from '@nestjs/common';
import { RedirectEntity } from '../../core/model/redirect.entity';
import { RedirectsRepositoryPort } from '../../core/ports/redirects-repository.port';
import { PrismaService } from '../../../prisma/prisma.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class RedirectsPrismaRepository extends RedirectsRepositoryPort {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async create(url: string, key: string): Promise<RedirectEntity> {
    const dbRedirect = await this.prisma.redirect.create({
      data: {
        id: uuidv4(),
        key: key,
        originalUrl: url,
        createdAt: new Date(),
      },
    });

    return new RedirectEntity(
      dbRedirect.id,
      dbRedirect.originalUrl,
      dbRedirect.key,
      this.buildShortLink(dbRedirect.key),
      dbRedirect.createdAt,
    );
  }

  async findByOriginalUrl(url: string): Promise<RedirectEntity | undefined> {
    const redirect = await this.prisma.redirect.findFirst({
      where: {
        originalUrl: url,
      },
    });

    if (redirect === null) {
      return undefined;
    }

    return new RedirectEntity(
      redirect.id,
      redirect.originalUrl,
      this.buildShortLink(redirect.key),
      redirect.key,
      redirect.createdAt,
    );
  }

  private buildShortLink(key: string): string {
    return `http://localhost:3000/link/${key}`;
  }
}
