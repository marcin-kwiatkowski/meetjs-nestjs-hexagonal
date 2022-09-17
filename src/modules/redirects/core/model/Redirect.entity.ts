export class RedirectEntity {
  constructor(
    readonly id: string,
    readonly originalUrl: string,
    readonly key: string,
    readonly createdAt: Date,
  ) {}
}
