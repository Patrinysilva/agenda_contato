const nome = [];
const tel = [];
let linhas = "";

document.getElementById('agenda').addEventListener('submit', function(event) {
    event.preventDefault();
    adicionaLinha();
    atualizaTabela();
    
});

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome').value
    const inputTelefoneContato = document.getElementById('tel').value

    if (tel.includes(inputTelefoneContato)){
        alert(`O numero ${inputTelefoneContato.value} ja foi inserido`);
    } else {
        nome.push(inputNomeContato.value);
        tel.push(parseFloat(inputTelefoneContato.value));

        let linha = "<tr>"
        linha += `<td> ${inputNomeContato}</td>`;
        linha += `<td> ${inputTelefoneContato}</td>`;
        linha += "</tr>";
        linhas += linha;
    }
    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}
function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
