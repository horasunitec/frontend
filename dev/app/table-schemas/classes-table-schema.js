module.exports = (btnClick) => {
	return {
		headers: [ 'Código', 'Nombre' , 'Editar'],
		rows: [
			{ type: 'label', props: { text: obj => obj.Code }  },
			{ type: 'label', props: { text: obj => obj.Name }  },
			{ type: 'button', props: { icon: 'glyphicon glyphicon-pencil', 
					                       tooltip: 'Editar Sección', 
					                       onClick: btnClick } }
		]
	}
};
