(function() {

    let taskList = document.querySelector('#task-list');
    let form = document.querySelector('form');
    let field = document.querySelector('#item');

    document.addEventListener('DOMContentLoaded', function() {

        //Focus on the text field
        field.focus();

        form.addEventListener('submit', function(e) {
            //Prevents reloading
            e.preventDefault();
            taskList.innerHTML += '<li>' + field.value + '</li>';
            store();

            //Clears the text field after adding the new task
            field.value = "";
        }, false)

        //Manipulating added tasks
        taskList.addEventListener('click', function(e) {
            let clickedTask = e.target;

            if (clickedTask.classList.contains('done'))
                clickedTask.parentNode.removeChild(clickedTask); // Removes completed task
            else
                clickedTask.classList.add('done');

            store();
        }, false)
    });

    const store = () => window.localStorage.myitems = taskList.innerHTML;

    //Retrieve saved tasks
    const loadTasks = () => {
        let savedTasks = window.localStorage.myitems;

        if (savedTasks)
            taskList.innerHTML = savedTasks;
    }
    loadTasks();
})();