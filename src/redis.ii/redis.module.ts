import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ClientProxyFactory, Transport } from '@nestjs/microservices'
import { RedisService } from './redis.service'

export const REDIS_MICROSERVICE_KEY = 'redis-microservice'

const redisMicroserviceFactory = {
  provide: REDIS_MICROSERVICE_KEY,
  useFactory: () => {
    return ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        host: '127.0.0.1',
        password: 'root',
        username: 'default',
        db: 1,
        port: +6379,
      },
    })
  },
  inject: [],
}

@Module({
  providers: [redisMicroserviceFactory, RedisService],
  exports: [redisMicroserviceFactory, RedisService],
})
export class RedisModule {}
