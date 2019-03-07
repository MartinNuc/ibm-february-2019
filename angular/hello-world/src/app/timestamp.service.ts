import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimestampService {
  timestampList: Date[] = [];
  constructor() { }

  recordDate(date: Date) {
    this.timestampList.push(date);
  }
}
