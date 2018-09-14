class Sorter {
  constructor() {
    // your implementation
    this.array = [];
    this.comparator = (a, b) => a - b;
  }

  add(element) {
    // your implementation
    this.array.push(element);
  }

  at(index) {
    // your implementation
    return this.array[index];
  }

  get length() {
    // your implementation
    return this.array.length;
  }

  toArray() {
    // your implementation
    return this.array;
  }

  sort(indices) {
    // your implementation
    indices.sort();
    let arrToSort = indices.map(e => this.array[e]);
    arrToSort.sort(this.comparator);
    indices.forEach((i, ii) => this.array[i] = arrToSort[ii]);
  }

  setComparator(compareFunction) {
    // your implementation
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;