const  config     = require('./approve-hour.config'),
	   controller = require('./approve-hour.controller');

const moduleName   = 'approve-hour.component',
      dependencies = [];

angular.module(moduleName, dependencies)
	.config(config)
	.controller(controller.name, controller.ctrl);

module.exports = moduleName;