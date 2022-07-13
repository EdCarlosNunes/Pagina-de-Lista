let inputNovaTarefa = document.querySelector('#inputNovaTarefa');
let list = document.querySelector('#list');
let btnAddTarefa = document.querySelector('#btnAddTarefa');

tesk.addEventListener('keypress', (e) =>{
    if(e.keyCode == 13){
        let tarefa = {
            nome: tesk.value,
            id: gerarId(),
        }
        adicionarTarefa(tarefa);
    }
});

buttonAdd.addEventListener('click', (e) => {

        let tarefa = {
            nome: tesk.value,
            id: gerarId(),
        }
        adicionarTarefa(tarefa);
});

function gerarId(){
    return Math.floor(Math.random() * 3000);
};

function  adicionarTarefa(tarefa){
    let li = criarTag(tarefa);
    list.appendChild(li);
    tesk.value = '';
};

function criarTag(tarefa){

    let li = document.createElement('li');


    let btnEdit = document.createElement('button');
    btnEdit.classList.add('btnAcao');
    btnEdit.innerHTML = '<i class="fi fi-rr-pencil"></i>';

   

    div.appendChild(btnEdit);
 

    li.appendChild(span);
    li.appendChild(div);
    return li;

};
