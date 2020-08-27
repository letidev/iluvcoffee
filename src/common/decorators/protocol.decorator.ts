import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export const Protocol = createParamDecorator((defaultValue: string, ctx: ExecutionContext): string => {
  console.log({ defaultValue });
  const request: Request = ctx.switchToHttp().getRequest();
  return request.protocol;
});
