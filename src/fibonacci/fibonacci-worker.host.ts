import {
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
} from '@nestjs/common';
import { randomUUID } from 'crypto';
import { join } from 'path';
import { Observable, filter, firstValueFrom, fromEvent, map } from 'rxjs';
import { Worker } from 'worker_threads';

@Injectable()
export class FibonacciWorkerHost
  implements OnApplicationBootstrap, OnApplicationShutdown
{
  private worker: Worker;
  private message$: Observable<{ id: string; result: number }>;

  onApplicationBootstrap() {
    this.worker = new Worker(join(__dirname, 'fibonacci.worker.js'));
    this.message$ = fromEvent(this.worker, 'message') as unknown as Observable<{
      id: string;
      result: number;
    }>;
  }
  onApplicationShutdown() {
    this.worker.terminate();
  }

  run(n: number) {
    const uniqueUUID = randomUUID();
    this.worker.postMessage({ n, id: uniqueUUID });
    return firstValueFrom(
      this.message$.pipe(
        filter(({ id }) => id === uniqueUUID),
        map(({ result }) => result),
      ),
    );
  }
}
