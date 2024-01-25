import { Injectable } from '@nestjs/common';

@Injectable()
export class RewardsService {
  grantTo() {
    console.log('====================================');
    console.log('Hello from laze-loaded RewardsService');
    console.log('====================================');
  }
}
