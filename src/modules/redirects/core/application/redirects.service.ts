import { RedirectsPort } from '../ports/redirects.port';
import { RedirectEntity } from '../model/Redirect.entity';

export class RedirectsService extends RedirectsPort {
  findOrCreate(url: string): Promise<RedirectEntity> {
    return Promise.resolve(
      new RedirectEntity(
        'b31e9b3b-34d9-45c2-9f4c-ad929c55c840',
        url,
        'key',
        'shortUrl',
        new Date(),
      ),
    );
  }
}
