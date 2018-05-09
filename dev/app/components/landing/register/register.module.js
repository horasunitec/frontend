const config     = require('./register.config'),
	  controller = require('./register.controller');

const moduleName   = 'register.component',
      dependencies = [];

angular.module(moduleName, dependencies)
	.config(config)
	.controller(controller.name, controller.ctrl);

module.exports = moduleName;