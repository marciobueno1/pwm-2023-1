const h1Titulo = document.getElementById("h1Titulo");
const inputTitulo = document.getElementById("inputTitulo");
const btAlterar = document.getElementById("btAlterar");


// h1Titulo.innerText = "<em>Novo</em> Título";

// setTimeout(() => {
//   h1Titulo.innerHTML = "<em>Novo</em> Título";
// }, 3000);


// btExemplo.onclick = () => {
//   h1Titulo.innerHTML = "<em>Novo</em> Título";
// }

const handleBtAlterarClick = () => {
  const novoTitulo = inputTitulo.value;
  if (!novoTitulo) {
    alert("É necessário digitar um título");
    return;
  }
  h1Titulo.innerText = novoTitulo;
}

btAlterar.onclick = handleBtAlterarClick;