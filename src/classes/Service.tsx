class Service {
  methods: object = {};

  _this: object = {};

  constructor(methods: object) {
    this.methods = methods;
  }

  hasMethod(name: string): boolean {
    return !!this.methods[name];
  }

  callMethod(name: string, args: Array<any>): any {
    let method = this.methods[name];
    return method.apply(this._this, args);
  }
}

export default Service;
