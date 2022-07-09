const alunos = [
    {
        nome: 'Maria',
        nota: 8,
        turma: '6A',
    },
    {
        nome: 'Josef',
        nota: 4.5,
        turma: '8B'
    },
    {
        nome: 'Ana Clara',
        nota: 7,
        turma: '5A',
    }
];

function alunosAprovados(alunos, media) {
	let aprovados = [];

	for (let i = 0; i < alunos.length; i++) {
		let { nota, nome } = alunos[i];

		if (nota >= media) {
			aprovados.push(nome);
		}
	}

	return aprovados;
}

console.log(alunosAprovados(alunos, 5));

