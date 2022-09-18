import { RedirectEntity } from '../../../core/model/Redirect.entity';

export class RedirectDto {
  readonly shortUrl: string;

  constructor(shortUrl: string) {
    this.shortUrl = shortUrl;
  }

  static fromBusinessObject(redirect: RedirectEntity): RedirectDto {
    return new RedirectDto(redirect.shortUrl);
  }
}
