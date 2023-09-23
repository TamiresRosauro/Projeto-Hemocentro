
// Definições básicas
// Declaração da variável continuar, como true para manter o loop principal do programa em execução
let continuar = true
// Declaração da variável "dadosDoador" como array, para armazenar posteriormente os dados dos doadores na função cadastro
let dadosDoador = []

// Função para cadastro
function cadastrarDoador() {
	// Solicitando os dados do doador e armazenando nas respectivas variaveis
	let nome = prompt("Digite o seu nome:")
	let idade = Number(prompt("Digite a sua idade (anos):"))
	let peso = Number(prompt("Digite o seu peso (Kg):"))
	let tipoSanguineo = prompt("Digite o seu tipo sanguineo:")
	let dataUltimaDoacao = prompt("Digite a data (dd/mm/aaaa) da sua última doação:")

	// Criando um objeto doador com as informações recebidas
	let doador = {
		nome: nome,
		idade: idade,
		peso: peso,
		tipoSanguineo: tipoSanguineo,
		dataUltimaDoacao: dataUltimaDoacao
	}

	// Adicionando o doador recém cadastrado ao array de doadores
	dadosDoador.push(doador)
	
	//Exibe a mensagem de confirmação de doador cadastrado
	console.log("Doador cadastrado.")
}

// Função para listar doadores
// Exibe cabeçalho para mostrar a listagem de doadores 
function listarDoadores() {

	console.log("--------------------")
	console.log("LISTAGEM DE DOADORES:")
	console.log("--------------------")
	console.log("NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO")

	// Itera sobre a variável de doadores e exibe informações de cada doador
	for (let i = 0; i < dadosDoador.length; i++) {
		console.log(`${dadosDoador[i].nome}             | ${dadosDoador[i].idade}     | ${dadosDoador[i].peso}     | ${dadosDoador[i].tipoSanguineo}              | ${dadosDoador[i].dataUltimaDoacao}`)
	}

	// Verifica se o array de doadores está vazio e imprimi na tela a mensagem
	if (dadosDoador.length === 0)
		console.log("Nenhum doador encontrado!")

	console.log("\n\n")
}

// Função para buscar doadores por tipo sanguíneo 
function buscarPorTipoSanguineo() {
	// Solicita ao usuário que digite o tipo sanguíneo desejado 	
	let buscarPorTipoSanguineo = prompt("Digite o tipo sanguíneo desejado:")

	// Declara um array vazio para armazenar os doadores encontrados
	let resultadosTipoSanguineo = []

	// Itera sobre a variável dadosDoador
	for (let i = 0; i < dadosDoador.length; i++) {
		// Quando encontrar um doador que tenha o tipo sanguineo igual ao buscado, adiciona no array de resultados
		if (dadosDoador[i].tipoSanguineo === buscarPorTipoSanguineo) {
			resultadosTipoSanguineo.push(dadosDoador[i])
		}
	}

	//Exibe cabeçalho para mostrar o resultado da busca
	console.log("RESULTADO DA BUSCA POR TIPO SANGUÍNEO: " + buscarPorTipoSanguineo)
	console.log("------------------------")
	console.log("NOME             | IDADE | PESO | TIPO SANGUíNEO | ÚLTIMA DOAÇÃO")
	// Itera sobre a variável de doadores encontrados e exibe na lista	
	for (let i = 0; i < resultadosTipoSanguineo.length; i++) {
		console.log(`${resultadosTipoSanguineo[i].nome}             | ${resultadosTipoSanguineo[i].idade}     | ${resultadosTipoSanguineo[i].peso}     | ${resultadosTipoSanguineo[i].tipoSanguineo}              | ${resultadosTipoSanguineo[i].dataUltimaDoacao}`)
	}

	// Verifica se o array de doadores encontrados está vazio e imprimi na tela a mensagem
	if (resultadosTipoSanguineo.length === 0)
		console.log("Nenhum doador encontrado!")

	console.log("\n\n")
}

// Função para buscar doadores por data da ultima doação 
function buscarPorDataUltimadoacao() {
	// Solicita ao usuário que digite a data da ultima doação para busca 
	let buscarPorDataUltimadoacao = prompt("Digite a data desejada (dd/mm/aaaa):")

	// Declara um array vazio para armazenar os doadores encontrados
	let resultadoDataUltimaDoacao = []

	// Itera sobre a variável doadores 
	for (let i = 0; i < dadosDoador.length; i++) {
		// Quando encontrar um doador que tenha a mesma data da ultima doação igual a data buscada, adiciona no array de resultados
		if (dadosDoador[i].dataUltimaDoacao === buscarPorDataUltimadoacao)
			resultadoDataUltimaDoacao.push(dadosDoador[i])
	}

	//Exibe cabeçalho para mostrar o resultado da busca
	console.log("------------------------")
	console.log("RESULTADO DA BUSCA DATA DA ÚLTIMA DOAÇÃO: " + buscarPorDataUltimadoacao)
	console.log("------------------------")
	console.log("NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO")

	// Itera sobre a variável de doadores encontrados e exibe na lista	
	for (let i = 0; i < resultadoDataUltimaDoacao.length; i++) {
		console.log(`${resultadoDataUltimaDoacao[i].nome}             | ${resultadoDataUltimaDoacao[i].idade}     | ${resultadoDataUltimaDoacao[i].peso}     | ${resultadoDataUltimaDoacao[i].tipoSanguineo}              | ${resultadoDataUltimaDoacao[i].dataUltimaDoacao}`)
	}

	// Verifica se o array de doadores encontrados está vazio e imprimi na tela a mensagem
	if (resultadoDataUltimaDoacao.length === 0)
		console.log("Nenhum doador encontrado!")

	console.log("\n\n")
}

// Função para sair
function sair() {
	// Altera o valor da variável "continuar" para falso para sair do loop e escreve na tela a mensagem
	continuar = false
	console.log("Tchau! Para reiniciar, atualize a aba do navegador.")
}


// Loop que mantém o programa em execução enquanto a variável - continuar - for verdadeira
while (continuar) {
	// Escreve o menu principal para o usuário
	let pergunta = "SISTEMA DE CADASTRO DE DOADORES DE SANGUE\n"
	pergunta += "-------------------------\n"
	pergunta += "Escolha uma opção:\n"
	pergunta += "1. Cadastrar doador\n"
	pergunta += "2. Listar doadores\n"
	pergunta += "3. Buscar doador por tipo sanguíneo\n"
	pergunta += "4. Buscar doador por data da última doação\n"
	pergunta += "5. Sair"

	// Solicita ao usuário que escolha uam opção do menu
	let resposta = Number(prompt(pergunta))

	// Chamar a função de acordo com a opção selecionada pelo usuário
	switch (resposta) {
		case 1:
			cadastrarDoador()
			break
		case 2:
			listarDoadores()
			break
		case 3:
			buscarPorTipoSanguineo()
			break
		case 4:
			buscarPorDataUltimadoacao()
			break
		case 5:
			sair()
			break
	}
}
