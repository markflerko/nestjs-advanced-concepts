import { Module } from '@nestjs/common';
import { FibonacciWorkerHost } from 'src/fibonacci/fibonacci-worker.host';
import { FibonacciController } from './fibonacci.controller';

@Module({
  controllers: [FibonacciController],
  providers: [FibonacciWorkerHost],
})
export class FibonacciModule {}
