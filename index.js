function adicionarTarefa() {    
    let mensagem = "Tarefa adicionada com sucesso!";
    // O código abaixo realiza o input

     let inputTarefa = document.getElementById('inputTarefa')     
     let tarefa = inputTarefa.value.trim()
     
     if (tarefa !== "") {
        document.getElementById("mensagem").textContent = mensagem;

        let listaTarefas = document.getElementById('listaTarefas')
        let novaTarefa = document.createElement('li')
    
        novaTarefa.textContent = tarefa
    
        listaTarefas.appendChild(novaTarefa)
    
     }

    else
        alert('Não é possível inserir uma tarefa vazia');

    inputTarefa.value = "" // Limpa o campo de input
};