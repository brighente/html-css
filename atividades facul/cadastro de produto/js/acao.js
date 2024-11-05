// JavaScript Document


/*
    .onclick = ativa a função quando clica
    .value ---> pega o valor do objeto
    .push  ---> 'empurra' itens pro array
    .appendChild ---> Cria um 'filho' para algo que ja existe no HTML
    .createElement ---> Cria um elemento de HTML

*/ 







window.onload = inicio;

var itens = []
var textInput = document.getElementById("inputText");
var btnAdd = document.getElementById("addBtn");
var btnCancelar = document.getElementById("cancalaBtn");



function inicio(){
    btnAdd.onclick = addItemToArray;
}

function addItemToArray(){
    if(textInput.value != null && textInput.value != " " && textInput.value != 0){
        //Adiciona um item no array
        itens.push(textInput.value)

        PopularLista()

        //Limpa o campo de texto
        textInput.value = ""

    }
    
}

function PopularLista(){
    var ul = document.getElementById("minhaLista");
    

    for(let indice = 0; indice<itens.length; indice++){
        //Adicionando conteudo do Array

        var li = document.createElement("li");
        li.textContent = itens[indice];

        //Add botão de edit

        var btnEdit = document.createElement("button");     // Criando elemento em runtime (botao)
        btnEdit.onclick = editarItem;
        btnEdit.textContent = "Editar";
        btnEdit.className = "edite"

        //Add botão de deletar

        var btnDelete = document.createElement("button");
        btnDelete.textContent = "X"
        btnDelete.className = "delete"
        btnDelete.onclick = function(){

            deletarItem(indice);  // Para passar parametros com uma função, chamamos uma função anonima e ai sim passamos o parametro
        }

        
    }   
    
    ul.appendChild(li);
    li.appendChild(btnDelete);
    li.appendChild(btnEdit);
    
    
}

function editarItem(){
    
}

function deletarItem(indiceElemento){
    itens.splice(indiceElemento, 1)  // .splice(array, quantidade de itens a serem cortados)  
    console.log(itens)

    PopularLista()

}

