import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
//import { CacheConfigModule } from 'src/cache/cache.config.module';
import { AppService } from './app.service'
import { RedisModule } from 'src/redis/redis.module'

@Module({
  //imports: [CacheConfigModule],
  imports: [RedisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
