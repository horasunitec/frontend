const  config     = require('./finalized.config'),
	   controller = require('./finalized.controller');

const moduleName   = 'finalized.component',
      dependencies = [];

angular.module(moduleName, dependencies)
	.config(config)
	.controller(controller.name, controller.ctrl);

module.exports = moduleName;