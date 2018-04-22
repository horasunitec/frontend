module.exports = userType => {
	let schema = {
		headers: [ 'Número de Cuenta', 'Nombre', 'Correo', 'Campus', 'Cuenta Activa' ],
		rows: [
			{ type: 'label', props: { text: obj => obj.AccountId }  },
			{ type: 'label', props: { text: obj => obj.Name }  },
			{ type: 'label', props: { text: obj => obj.Email ? obj.Email : 'N/A' }  },
			{ type: 'label', props: { text: obj => obj.Campus } },
			{ type: 'label', props: { text: obj => obj.Status ? 'Si' : 'No' } }
		]
	};
	
	if (userType === 'student') {
		schema.headers.splice(3, 0, 'Carrera');
		schema.headers.splice(5, 0, 'Finiquitado');

		schema.rows.splice(3, 0, 
			{ type: 'label', props: { text: obj => obj.Major ? obj.Major.Name : 'N/A' }  });

		schema.rows.splice(5, 0, 
			{ 
				type: 'label', props: { text: obj => obj.Finiquiteado ? 'Si' : 'No' } 
			});
	}

	return schema;
};
