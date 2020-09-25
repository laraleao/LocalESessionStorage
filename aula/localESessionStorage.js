// // Para dados individuais

// var respostaPreenchida = document.getElementById("resposta");

// function salvar() {
//   // usar o .value precisa estar dentro da função os valores do inputs (aqui, nome e idade)
//   var nome = document.getElementById("nome").value;
//   var idade = document.getElementById("idade").value;
//   var pessoa = { nome, idade };
//   localStorage.setItem("nome", JSON.stringify(pessoa));
//   //   atribuindo um item -- tem que passar 2 informações - nome e valor dela
//   //   posso fechar a página e os dados continuarão ali
// }

// function apresentarNome() {
//   // getItem é para pegar para apresentar
//   let final = localStorage.getItem("nome");
//   let converter = JSON.parse(final);
//   respostaPreenchida.innerHTML = `${converter.nome} tem ${converter.idade} anos de idade.`;
// }

// Para arrays

var respostaPreenchida = document.getElementById("resposta");

let pessoas = [];

function salvar() {
  // usar o .value precisa estar dentro da função os valores do inputs (aqui, nome e idade)
  var nome = document.getElementById("nome").value;
  var idade = document.getElementById("idade").value;
  var pessoa = { nome, idade };
  pessoas.push(pessoa);

  sessionStorage.setItem("resposta", JSON.stringify(pessoas));
}

function apresentarNome() {
  // getItem é para pegar para apresentar

  let final_apresentar = JSON.parse(sessionStorage.getItem("resposta"));

  // getItem e setItem tem que ser o mesmo valor

  let mostrar = document.getElementById("final");

  for (i = 0; i < final_apresentar.length; i++) {
    mostrar.innerHTML += `O nome é: ${final_apresentar[i].nome} e a idade é: ${final_apresentar[i].idade}. <br>`;
  }
}

// // converter Json em string
// JSON.stringify({ object: "objeto", newObject: "novo objeto" });

// //converte a string para um objeto tipo Json
// JSON.parse({ object: "objeto", newObject: "novo objeto" });

// exemplo
// LocalStorage - setitem - passo chave e valor
// pegar item preciso saber o nome da chave que eu vou pegar
// localStorage.setItem("teste", JSON.stringify(aluno));
// let retorno = localStorage.getItem("teste");
// let conversao = JSON.parse(retorno);
