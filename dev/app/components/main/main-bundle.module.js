const ApproveHours          = require('./approve-hours/approve-hours.module'),
      ApproveHour           = require('./approve-hour/approve-hour.module'),
      Classes               = require('./classes/classes.module'),
      ClassForm             = require('./class-form/class-form.module'),
      Dashboard             = require('./dashboard/dashboard.module'),
      EditHours             = require('./edit-hours/edit-hours.module'),
      ImportStudents        = require('./import-students/import-students.module'),
      Main                  = require('./main.module'),
      Periods               = require('./periods/periods.module'),
      PeriodForm            = require('./period-form/period-form.module'),
      Professors            = require('./professors/professors.module'),
      ProfessorForm         = require('./professor-form/professor-form.module'),
      Project               = require('./project/project.module'),
      ProjectEvaluationForm = require('./project-evaluation-form/project-evaluation-form.module'),
      ProjectForm           = require('./project-form/project-form.module'),
      Projects              = require('./projects/projects.module'),
      Reports               = require('./reports/reports.module'),
      Section               = require('./section/section-bundle.module'),
      SectionForm           = require('./section-form/section-form.module'),
      SectionProjectForm    = require('./section-project-form/section-project-form.module'),
      Sections              = require('./sections/sections.module'),
      Settlement            = require('./settlement/settlement.module'),
      Students              = require('./students/students.module'),
      StudentForm           = require('./student-form/student-form.module');

const moduleName = 'main-bundle',
      components = [ ApproveHours, ApproveHour, Classes, ClassForm, Dashboard, EditHours, ImportStudents, Main,
                     Periods, PeriodForm, Professors, ProfessorForm,  Project, ProjectEvaluationForm, ProjectForm, 
                     Projects, Reports, Section, SectionForm, SectionProjectForm, Sections, Settlement, Students, StudentForm ];

angular.module(moduleName, components);

module.exports = moduleName;
