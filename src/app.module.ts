import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { CronModule } from './cron/cron.module';
import { FibonacciModule } from './fibonacci/fibonacci.module';
import { HttpClientModule } from './http-client/http-client.module';
import { NotificationsService } from './payments/notifications.service';
import { PaymentsModule } from './payments/payments.module';
import { SubscriptionsService } from './payments/subscriptions.service';
import { RecipesModule } from './recipes/recipes.module';
import { SchedulerModule } from './scheduler/scheduler.module';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    CoffeesModule,
    SchedulerModule,
    CronModule,
    FibonacciModule,
    HttpClientModule.register({ baseUrl: 'http://nestjs.com' }),
    HttpClientModule.register({ baseUrl: 'http://nestjs.com' }),
    HttpClientModule.register({ baseUrl: 'http://nestjs.com' }),
    HttpClientModule.register({ baseUrl: 'http://nestjs.com' }),
    RecipesModule,
    TagModule,
    PaymentsModule,
  ],
  controllers: [AppController],
  providers: [AppService, NotificationsService, SubscriptionsService],
})
export class AppModule {}
