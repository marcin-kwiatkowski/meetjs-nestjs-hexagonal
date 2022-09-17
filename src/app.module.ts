import { Module } from '@nestjs/common';
import { RedirectsModule } from './modules/redirects/redirects.module';

@Module({
  imports: [RedirectsModule],
})
export class AppModule {}
