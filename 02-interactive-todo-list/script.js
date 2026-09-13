const input = document.querySelector('#task-input');
const addBtn = document.querySelector('#add-btn');
const taskList = document.querySelector('#task-list');

addBtn.addEventListener('click', function(){
    if (input.value.trim() !==''){
   const li = document.createElement('li');
   li.textContent = input.value;
   input.value ='';

   const deleteBtn = document.createElement('button');
   deleteBtn.textContent = 'Delete';
   
   deleteBtn.addEventListener('click', function() {
    li.remove();
});


   li.appendChild(deleteBtn);
   taskList.appendChild(li);
   input.value ='';
   }
});


