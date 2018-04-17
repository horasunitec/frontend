module.exports = {
	headers: [ 'Número de Cuenta', 'Nombre' ],
	rows: [
		{ type: 'label', props: { text: obj => obj.AccountId }  },
		{ type: 'label', props: { text: obj => obj.Name }  }
	]
};
