import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
})
export class CustomPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(args);
    const defaultTag = 'Rs';
    if (args.length === 0) {
      return `${defaultTag} ${value}`;
    } else {
      return `${args[0]} ${value}`;
    }
  }
}
