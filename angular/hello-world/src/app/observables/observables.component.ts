import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  subject$ = new Subject<Date>();

  everyTwoSeconds$ = interval(1000).pipe(
    map(x => new Date())
  );

  observable$: Observable<number> = new Observable(observer => {
    let counter = 0;
    console.log('observable running');
    setInterval(() => {
      observer.next(counter++);
    }, 2000);
  });

  constructor() { }

  emitDateUsingSubject() {
    this.subject$.next(new Date());
  }

  startObservable() {
    const subscription = this.everyTwoSeconds$.pipe(
      map(x => new Date())
    ).subscribe(
      value => console.log(value)
    );
    setTimeout(() => {
      subscription.unsubscribe();
    }, 5000);


    // const newObservable$ = this.observable$.pipe(
    //   map(x => x + 5),
    //   tap((x) => console.log('inner', x)),
    //   filter(x => x % 3 === 0)
    // );
    // newObservable$.subscribe(
    //   (value) => console.log('emitted:', value),
    //   () => console.log('error'),
    //   () => console.log('work done')
    // );
  }

  ngOnInit() {

    // observable$.subscribe(
    //   (value) => console.log('emitted:', value),
    //   () => console.log('error'),
    //   () => console.log('work done')
    // );

    const promise = new Promise((resolve, reject) => {
      console.log('promise running');
      setTimeout(() => {
        resolve();
      }, 2000);
    });

  }

}
