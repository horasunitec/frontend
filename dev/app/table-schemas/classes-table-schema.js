module.exports = {
	headers: [ 'Código', 'Nombre' ],
	rows: [
		{ type: 'label', props: { text: obj => obj.Code }  },
		{ type: 'label', props: { text: obj => obj.Name }  }
	]
};
