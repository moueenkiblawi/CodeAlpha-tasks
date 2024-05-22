
function calculateAge() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    

    if (!day || !month || !year) {
        alert("Please enter valid date of birth, month, and year!");
        return;
    }   
    
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    const result = `You are ${age} years old.`;
    document.getElementById('result').innerText = result
}


// Todo-List



    const newTaskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    const addTask = () => {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-btn');
            deleteButton.addEventListener('click', () => {
                li.remove();
            });

            li.appendChild(deleteButton);

            li.addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            taskList.appendChild(li);

            newTaskInput.value = '';
        }
    };

    addTaskButton.addEventListener('click', addTask);

    

