import { Module } from '@nestjs/common';
import { DiscoveryModule } from '@nestjs/core';
import { IntervalScheduler } from 'src/scheduler/interval.scheduler/interval.scheduler';

@Module({
  imports: [DiscoveryModule],
  providers: [IntervalScheduler],
})
export class SchedulerModule {}
