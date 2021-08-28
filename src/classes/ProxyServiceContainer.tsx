import Service from "./Service";

class ProxyServicesContainer {
  services: object = {};

  defaultService: Service = null;

  static ERR_NO_METHOD = -1;

  static ERR_NO_SERVICE = -2;

  addService(name, methodsObj, dependencies = {}, setDefault = false) {
    if (Object.keys(this.services).length === 0) {
      setDefault = true;
    }
    this.services[name] = new Service(methodsObj, dependencies);
    if (setDefault) {
      this.defaultService = this.services[name];
    }
    return this;
  }

  call(name: string, ...args: any) {
    const service = this.getDefaultService();
    if (service.hasMethod(name)) {
      return service.callMethod(name, args);
    }
    return ProxyServicesContainer.ERR_NO_METHOD;
  }

  callAll(name: string, ...args: any) {
    const result = {};
    Object.keys(this.services).forEach((serviceName) => {
      const service = this.getService(serviceName);
      if (service.hasMethod(name)) {
        result[serviceName] = service.callMethod(name, args);
      } else {
        result[serviceName] = ProxyServicesContainer.ERR_NO_METHOD;
      }
    });
    return result;
  }

  callOn(arrServices: Array<string>, name: string, ...args: any): object {
    const result = {};
    arrServices.forEach((serviceName) => {
      if (this.hasService(serviceName)) {
        const service = this.getService(serviceName);
        if (service.hasMethod(name)) {
          result[serviceName] = service.callMethod(name, args);
        } else {
          result[serviceName] = ProxyServicesContainer.ERR_NO_METHOD;
        }
      } else {
        result[serviceName] = ProxyServicesContainer.ERR_NO_SERVICE;
      }
    });
    return result;
  }

  setDefaultService(name: string): ProxyServicesContainer | number {
    if (typeof name == "string") {
      if (this.hasService(name)) {
        this.defaultService = this.getService(name);
        return this;
      }
    }
    return ProxyServicesContainer.ERR_NO_SERVICE;
  }

  getDefaultService(): Service {
    return this.defaultService;
  }

  hasService(name: string): boolean {
    return !!this.services[name];
  }

  getService(name: string): Service {
    return this.services[name];
  }
}

export default ProxyServicesContainer;
