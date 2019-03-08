import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimestampService {
  private timestampList: Date[] = [];
  private changes$ = new Subject<Date[]>();

  recordDate(date: Date) {
    this.timestampList.push(date);
    this.changes$.next(this.timestampList);
  }

  getObservable() {
    return this.changes$.asObservable();
  }
}
