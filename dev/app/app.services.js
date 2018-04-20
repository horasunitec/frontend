const auth        = require('./services/Auth/auth.module'),
      classes     = require('./services/Classes/classes.module'),
      hours       = require('./services/Hours/hours.module'),
      majors      = require('./services/Majors/majors.module'),
      periods     = require('./services/Periods/periods.module'),
      professors  = require('./services/Professors/professors.module'),
      projects    = require('./services/Projects/projects.module'),
      reports     = require('./services/Reports/reports.module'),
      sections    = require('./services/Sections/sections-bundle.module'),
      sprojects   = require('./services/SectionProjects/section-projects.module'),
      students    = require('./services/Students/students.module'),
      tbTable     = require('./services/TbTable/tb-table-services.module'),
      tbUtils     = require('./services/TbUtils/tb-utils.module'),
      users       = require('./services/Users/users.module'),
      settlement  = require('./services/Settlement/settlement.module'),
      finalized   = require('./services/Finalized/finalized.module');;

const moduleName    = 'vinculacion.services',
      dependencies  = [ auth, classes, hours, majors, periods, professors, projects, reports,
                        sections, sprojects, students, tbTable, tbUtils, users, settlement, finalized];

angular.module(moduleName, dependencies);

module.exports = moduleName;
