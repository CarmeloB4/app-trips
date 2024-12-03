import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, args: number = 20): string {
    const limit = args > 0 ? args : 20;
    const trail = '...';
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}
