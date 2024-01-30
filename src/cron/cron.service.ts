import { IntervalHost } from 'src/scheduler/decorators/interval-host.decorator';

@IntervalHost
export class CronService {
  // @Interval(1000)
  everySecond() {
    console.log('This will be logged every second');
  }
}
