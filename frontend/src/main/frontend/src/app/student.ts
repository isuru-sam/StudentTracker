export class Student {
 id: number;
  dbId:number;
  name: string = '';
  address: string = '';
  fullTime: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
