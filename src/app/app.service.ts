//import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Get, Inject, Injectable } from '@nestjs/common'
import { RedisService } from 'src/redis/redis.service'
//import { CacheConfigModule } from 'src/cache/cache.config.module';
//import { Cache } from 'cache-manager'

@Injectable()
export class AppService {
  constructor(private redisService: RedisService) {}

  async setSession() {
    const tenMinutesInSeconds = 60 * 10
    const userId = 'userid123'
    const current = 'currentToken'
    const next = 'nextToken'
    return await this.redisService.saveSession(userId, current)
    //return await this.redisService.compareAndSwap(userId, current, next, 120000)
    //return await this.cacheManager.set(`session:${userId}`, token)
  }

  async getSession() {
    const userId = 'userid123'
    return await this.redisService.getSession(userId)
    //return await this.redisService.getSession(userId, 10, 120000)
    //return await this.cacheManager.get(`session:${userId}`)
  }

  async deleteSession() {
    const userId = 'userid123'
    return await this.redisService.releaseSession(userId)
    //return await this.cacheManager.del(`session:${userId}`)
  }
}

/*
@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  

  async setSession() {
    const userId = 'userid123'
    const token = 'token123'
    return await this.cacheManager.set(`session:${userId}`, token)
  }

  async getSession() {
    const userId = 'userid123'
    return await this.cacheManager.get(`session:${userId}`)
  }

  async deleteSession() {
    const userId = 'userid123'
    return await this.cacheManager.del(`session:${userId}`)
    
  }
}*/
