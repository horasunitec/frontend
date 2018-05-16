const  config     = require('./enable-professor.config'),
	   controller = require('./enable-professor.controller');

const moduleName   = 'enable-professor.component',
      dependencies = [];

angular.module(moduleName, dependencies)
	.config(config)
	.controller(controller.name, controller.ctrl);

module.exports = moduleName;
