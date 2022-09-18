import { RedirectEntity } from '../model/Redirect.entity';

export abstract class RedirectsRepositoryPort {
  public abstract create(url: string, key: string): Promise<RedirectEntity>;
  public abstract findByOriginalUrl(
    url: string,
  ): Promise<RedirectEntity | undefined>;
  public abstract findByKey(key: string): Promise<RedirectEntity | undefined>;
}
