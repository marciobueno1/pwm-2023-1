const h1Titulo = document.getElementById("h1Titulo");
const inputNumero = document.getElementById("inputNumero");
const btSomar = document.getElementById("btSomar");

let somatorio = 0;

const handleBtSomarClick = () => {
  const novoNumero = Number(inputNumero.value);
  if (isNaN(novoNumero)) {
    alert("É necessário digitar um número");
    return;
  }
  somatorio += novoNumero;
  h1Titulo.innerText = `Somatório = ${somatorio}`;
}

btSomar.onclick = handleBtSomarClick;