const reportsUrl = `http://backend-4.apphb.com/api/Reports`,
      yearParamName = 'Año del Reporte',
      yearPlaceholder = '2016',
      classIdParamName = 'Código de la sección',
      classIdPlaceholder = 'Ingrese el código';

module.exports = [
	{ 
		title: 'Reporte de Costos', 
		url: `${reportsUrl}/CostsReport/`,
		hasParam: true,
		paramName: yearParamName,
		placeholder: yearPlaceholder
	},
	{ 
		title: 'Reporte del Numero de Alumnos', 
	  	url: `${reportsUrl}/StudentsReport/`,
		hasParam: true,
		paramName: yearParamName,
		placeholder: yearPlaceholder
	},
	{ 
		title: 'Reporte por Periodo', 
	  	url: `${reportsUrl}/PeriodReport/`,
		hasParam: true,
		paramName: yearParamName,
		placeholder: yearPlaceholder
	},
	{ 
		title: 'Reporte de Proyectos por Clase', 
	  	url: `${reportsUrl}/ProjectsByClassReport/`,
		hasParam: true,
		paramName: classIdParamName,
		placeholder: classIdPlaceholder
	},
	{ 
		title: 'Reporte de Horas', 
	  	url: `${reportsUrl}/HoursReport/`,
		hasParam: true,
		paramName: yearParamName,
		placeholder: yearPlaceholder
	},
	{ 
		title: 'Reporte de Proyectos por Carrera', 
	  	url: `${reportsUrl}/ProjectsByMajorReport`,
		hasParam: false
	}
];