let inputNome = document.getElementById('NomeAluno')
let inputMatricula = document.getElementById('MatriculaAluno')
let inputNota1 = document.getElementById('Nota1')
let inputNota2 = document.getElementById('Nota2')
let inputNota3 = document.getElementById('Nota3')
let FormularioAluno = document.querySelector('form')
let tabelaRegistros = document.querySelector('.RegistosAluno')
let btnApagarTodos = document.querySelector('#deleteAll')

let trElement = document.querySelector('.listItem')
let btnApagarAluno = document.querySelector('#ApagarAluno')

function novoAluno() {
FormularioAluno.onsubmit = function(event){
    event.preventDefault();

    const trElement = document.createElement('tr')
    trElement.setAttribute('class','listItem')
    tabelaRegistros.appendChild(trElement)

    const tdElementNome = document.createElement('td')
    tdElementNome.setAttribute('id','nome')
    tdElementNome.innerHTML = inputNome.value
    trElement.appendChild(tdElementNome)

    const tdElementMatricula = document.createElement('td')
    tdElementMatricula.setAttribute('id','matricula')
    tdElementMatricula.innerHTML = inputMatricula.value
    trElement.appendChild(tdElementMatricula)

    const tdElementNota1 = document.createElement('td')
    tdElementNota1.setAttribute('id','n1')
    tdElementNota1.innerHTML = inputNota1.value
    trElement.appendChild(tdElementNota1)

    const tdElementNota2 = document.createElement('td')
    tdElementNota2.setAttribute('id','n2')
    tdElementNota2.innerHTML = inputNota2.value
    trElement.appendChild(tdElementNota2)

    const tdElementNota3 = document.createElement('td')
    tdElementNota3.setAttribute('id','n3')
    tdElementNota3.innerHTML = inputNota3.value
    trElement.appendChild(tdElementNota3)

    const tdElementMedia= document.createElement('td')
    tdElementMedia.setAttribute('id', 'media')
    tdElementMedia.innerText = Media()
    trElement.appendChild(tdElementMedia)
    

    const tdElementBtnApagaAluno = document.createElement('td')
    tdElementBtnApagaAluno.innerHTML = '<button class="ApagarAluno" style="cursor: pointer;" title="Apagar Aluno" id="ApagarAluno">X</button>'
    trElement.appendChild(tdElementBtnApagaAluno)


    tdElementBtnApagaAluno.onclick = function(){
        let questionToUser = confirm('Deseja apagar este aluno?')
        if(questionToUser) {
            trElement.innerHTML = ''
        }
    }
}
}


FormularioAluno.onsubmit = function (event) {
    event.preventDefault()
    novoAluno()
}


function ApagarTodosAlunos() {
    tabelaRegistros.innerHTML = ''
}

btnApagarTodos.onclick = function() {
    let questionToUser = confirm('Deseja apagar todos os alunos?')
    if(questionToUser) {
        ApagarTodosAlunos()
    }
}


function Media(){
    let n1 = parseFloat(inputNota1.value);
    let n2 = parseFloat(inputNota2.value);
    let n3 = parseFloat(inputNota3.value);
    let resultado = ((n1 + n2 + n3) / 3).toFixed(1);

    return(
        parseFloat(resultado)
  )
}
