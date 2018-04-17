module.exports = {
	headers: [ 'Código Reporte' ,
				'Proyecto' ,
				'Sección' ,
				'Clase' ,
				'Docente' ,
				'Correo' ,
				'Periodo'
				],
	rows: [
		{ type: 'label', props: { text: obj => obj.Id } },
		{ type: 'label', props: { text: obj => obj.Project.Name } },
		{ type: 'label', props: { text: obj => obj.Section.Code } },
		{ type: 'label', props: { text: obj => obj.Section.Class.Name } },
		{ type: 'label', props: { text: obj => obj.Section.User.Name} },
		{ type: 'label', props: { text: obj => obj.Section.User.Email } },
		{ type: 'label', props: { text: obj => obj.Section.Period.Number + " - " + obj.Section.Period.Year} }
	]
};

