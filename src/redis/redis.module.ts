import { Module } from '@nestjs/common'
import {
  redisClientFactory,
  redisMicroserviceFactory,
} from './redis.client.factory'
import { RedisRepository } from './redis.repository'
import { RedisService } from './redis.service'

@Module({
  imports: [],
  controllers: [],
  providers: [redisClientFactory, RedisRepository, RedisService],

  exports: [RedisService],
})
export class RedisModule {}
