import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { CronModule } from './cron/cron.module';
import { FibonacciModule } from './fibonacci/fibonacci.module';
import { HttpClientModule } from './http-client/http-client.module';
import { SchedulerModule } from './scheduler/scheduler.module';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    CoffeesModule,
    SchedulerModule,
    CronModule,
    FibonacciModule,
    HttpClientModule.register({ baseUrl: 'http://nestjs.com' }),
    HttpClientModule.register({ baseUrl: 'http://nestjs.com' }),
    HttpClientModule.register({ baseUrl: 'http://nestjs.com' }),
    HttpClientModule.register({ baseUrl: 'http://nestjs.com' }),
    RecipesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
