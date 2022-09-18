import { RedirectsPort } from '../ports/redirects.port';
import { RedirectEntity } from '../model/Redirect.entity';
import { RedirectsRepositoryPort } from '../ports/redirects-repository.port';
import { generateKey } from './helpers/generate-key';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RedirectsService extends RedirectsPort {
  constructor(private readonly redirectRepository: RedirectsRepositoryPort) {
    super();
  }

  async findOrCreate(url: string): Promise<RedirectEntity> {
    const existingRedirect = await this.redirectRepository.findByOriginalUrl(
      url,
    );

    if (existingRedirect !== undefined) {
      return existingRedirect;
    }

    // Generate a new key
    const key = generateKey();

    return this.redirectRepository.create(url, key);
  }
}
