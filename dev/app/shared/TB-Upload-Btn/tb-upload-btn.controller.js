TbUploadBtnController.$inject = [ '$scope' ];

function TbUploadBtnController ($scope) {
	const vm = this;

	vm.file = null;
	vm.upload = upload;

	document.getElementById("uploadBtn").onchange = function () {
		const file = this.files[0];

		if (!file) return;

		vm.file = file;
		document.getElementById('uploadFile').value = vm.file.name;
	    $scope.$apply();
	};

	function upload () {
		const fr = new FileReader();

		fr.onloadend = e => { $scope.upload(e.target.result); };
		fr.readAsBinaryString(vm.file);
	}
}

module.exports = { name: 'TbUploadBtnController', ctrl: TbUploadBtnController };