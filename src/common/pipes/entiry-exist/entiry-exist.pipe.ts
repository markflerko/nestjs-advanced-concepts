import {
  ArgumentMetadata,
  Inject,
  Injectable,
  PipeTransform,
  Type,
} from '@nestjs/common';

export function EntityExistPipe(entityCls: Type): Type<PipeTransform> {
  @Injectable()
  class EntiryExistPipeCls implements PipeTransform {
    constructor(
      @Inject(entityCls)
      private entityRepository: { exists(condition: unknown): Promise<void> },
    ) {}

    async transform(value: any, metadata: ArgumentMetadata) {
      await this.entityRepository.exists({ where: { id: value } });
      return value;
    }
  }

  return EntiryExistPipeCls;
}
