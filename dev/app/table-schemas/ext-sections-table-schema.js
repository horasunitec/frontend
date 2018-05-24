module.exports = (btnClick,btnClick2) => {
	return {
		headers: ['Código', 'Clase', 'Periodo', 'Docente', 'Editar'
		//, 'Borrar'
	],
		rows: [
			{ type: 'label',  props: { text: obj => obj.Code }  },
			{ type: 'label',  props: { text: obj => obj.Class.Name }  },
			{ type: 'label',  props: { text: obj => obj.Period.Number + " - " + obj.Period.Year }  },
			{ type: 'label',  props: { text: obj => obj.User ? obj.User.Name : 'N/A' }  },
			{ type: 'button', props: { icon: 'glyphicon glyphicon-pencil', 
				                       tooltip: 'Editar Sección', 
									   onClick: btnClick } }
			//,{ type: 'button', props: { icon: 'glyphicon glyphicon-trash', tooltip: 'Borrar Sección', onClick: btnClick2 } }
		]
	};
};
