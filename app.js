function addTask() {
     // Obter referências aos elementos de entrada e lista de tarefas
     var taskInput = document.getElementById('taskInput');
     var taskList = document.getElementById('taskList');

    
    // Verificar se o campo de entrada não está vazio
 if (taskInput.value !== ''){
            // Criar um novo elemento de lista (li) para a nova tarefa
 var li = document.createElement('li');
 li.textContent = taskInput.value;

         // Criar um botão de exclusão e adicionar um evento para remover a tarefa ao ser clicado

         var deleteButton = document.createElement('button');
         deleteButton.textContent = 'excluir';
         deleteButton.addEventListener('click',function(){
            taskList.removeChild(li);
         });

                // Adicionar o botão de exclusão à tarefa
li.appendChild(deleteButton);

        // Adicionar a nova tarefa à lista de tarefas
taskList.appendChild(li);

        // Limpar o campo de entrada após adicionar a tarefa
taskInput.value = '';
 } 
     
}