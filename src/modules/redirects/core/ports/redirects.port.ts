import { RedirectEntity } from '../model/redirect.entity';

export abstract class RedirectsPort {
  public abstract findOrCreate(url: string): Promise<RedirectEntity>;
  public abstract findByKey(url: string): Promise<RedirectEntity | undefined>;
}
