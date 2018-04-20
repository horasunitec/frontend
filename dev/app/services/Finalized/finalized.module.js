const service = require('./finalized.service');

const moduleName   = 'finalized.service',
      dependencies = [];

angular.module(moduleName, dependencies)
	.factory(service.name, service.srvc);

module.exports = moduleName;