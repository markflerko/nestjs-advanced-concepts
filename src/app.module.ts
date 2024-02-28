import { Module } from '@nestjs/common';
import { ContextIdFactory } from '@nestjs/core';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AggregateByLocaleContextIdStrategy } from 'src/core/aggregate-by-locale.strategy';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { CronModule } from './cron/cron.module';
import { DataSourceModule } from './data-source/data-source.module';
import { FibonacciModule } from './fibonacci/fibonacci.module';
import { HttpClientModule } from './http-client/http-client.module';
import { I18nModule } from './i18n/i18n.module';
import { NotificationsService } from './payments/notifications.service';
import { PaymentsModule } from './payments/payments.module';
import { SubscriptionsService } from './payments/subscriptions.service';
import { RecipesModule } from './recipes/recipes.module';
import { SchedulerModule } from './scheduler/scheduler.module';
import { TagModule } from './tag/tag.module';
import { UsersModule } from './users/users.module';

ContextIdFactory.apply(new AggregateByLocaleContextIdStrategy());

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    CoffeesModule,
    SchedulerModule,
    CronModule,
    FibonacciModule,
    HttpClientModule.register({ baseUrl: 'http://nestjs.com' }),
    RecipesModule,
    TagModule,
    PaymentsModule,
    DataSourceModule,
    UsersModule,
    I18nModule,
  ],
  controllers: [AppController],
  providers: [AppService, NotificationsService, SubscriptionsService],
})
export class AppModule {}
