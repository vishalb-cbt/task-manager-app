import { Observable } from 'rxjs';

let data: number[] = [];

// Observable
const myObservable = new Observable((observer) => {
  // observer will receive all the subscribers subscribed to this observale
  // to emit the data to observers we need to call the next method
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.next(4);
  observer.next(5);
  // it will only emit this data if something is subscribed to it
});

const fetchData = (e) => {
  // whenever a new data will be emitted from myObservable this method will be notified
  // callback funcs next, error, complete
  console.log(data, 'before');
  myObservable.subscribe((val) => {
    data.push(val);
    console.log(data, 'after');
  });
  console.log(data, 'after');
};
