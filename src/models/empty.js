'use strict';

export class Empty {
  constructor (name) {
    this.name = name;
  }

  hi () {
    console.log(`Hi ${this.name}`);
  }
}
