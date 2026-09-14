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

   li.addEventListener('click', function(){
    li.classList.toggle('completed')
});
   
   deleteBtn.addEventListener('click', function() {
    e.stopPropagation();
    li.remove();
});


   li.appendChild(deleteBtn);
   taskList.appendChild(li);
   input.value ='';
   }

   localStorage.setItem('task-list', JSON.stringify(['day one', 'day two']));
   localStorage.getItem('task-list');
   
});


