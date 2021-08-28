class Service {
  methods: object = {};

  _this: object = {};

  constructor(methods: object) {
    this.methods = methods;
  }

  hasMethod(name) {
    return !!this.methods[name];
  }

  callMethod(name, args) {
    let method = this.methods[name];
    let match = method.toString().match(/^function\s*[^\(]*\(\s*([^\)]*)\)/m);
    let argsNames = (match[1] || "").split(",");
    let argsToInject = [];
    let argsIndex = 0;
    for (let name of argsNames) {
      argsToInject.push(args[argsIndex++]);
    }
    return method.apply(this._this, argsToInject);
  }
}

export default Service;
