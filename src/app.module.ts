import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedsModule } from './feeds/feeds.module';

@Module({
  imports: [FeedsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
