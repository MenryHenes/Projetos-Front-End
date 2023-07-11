function calcular() {
	var a = parseFloat(document.getElementById('numero-a').value);
	var b = parseFloat(document.getElementById('numero-b').value);
	var c = parseFloat(document.getElementById('numero-c').value);

	if (a == 0) {
		alert('ERRO! O valor de A não pode ser igual a 0, tente novamente!')
		location.reload();
	}
		
		var delta = b ** 2 - 4 * a * c;

		if (delta < 0) {
			var parteReal = -b / (2 * a);
			var parteImaginaria = Math.sqrt(-delta) / (2 * a);

			var x1 = parteReal + ' + ' + parteImaginaria + 'i';
			var x2 = parteReal + ' - ' + parteImaginaria + 'i';

			document.getElementById('informacao').innerText = 'Δ < 0 | Portando raiz não é real, i = unidade imáginaria'
	} else {
			var x1 = (-b + Math.sqrt(delta)) / (2 * a);
			var x2 = (-b - Math.sqrt(delta)) / (2 * a);
			document.getElementById('informacao').innerText = ''
	}

	document.getElementById('delta-texto').innerText = 'Δ: ' + delta
	document.getElementById('x1-texto').innerText = 'X1: ' + x1
	document.getElementById('x2-texto').innerText = 'X2: ' + x2

}