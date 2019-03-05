class Bucket<T> {
  items: T[] = [];

  insert(item: T) {
    this.items.push(item);
  }
}

let myBucket = new Bucket<string>();
myBucket.insert('fhslfihs');
let myBucketOfNumbers = new Bucket<number>();
myBucketOfNumbers.insert(4);