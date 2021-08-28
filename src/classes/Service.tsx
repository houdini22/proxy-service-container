class Service {
  methods: object = {};

  dependencies: object = {};

  _this: object = {};

  constructor(methods, dependencies) {
    this.methods = methods;
    this.dependencies = dependencies;
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
      let dependency = this.dependencies[name.trim()];
      if (dependency) {
        argsToInject.push(dependency);
      } else {
        argsToInject.push(args[argsIndex++]);
      }
    }
    return method.apply(this._this, argsToInject);
  }
}

export default Service;
