(function() {

    let taskList = document.querySelector('#task-list');
    let form = document.querySelector('form');
    let field = document.querySelector('#item');
    let hours = document.querySelector('#hours');
    let mins = document.querySelector('#mins');
    let seconds= document.querySelector('#seconds');


    document.addEventListener('DOMContentLoaded', function(){


        field.focus();

        form.addEventListener('submit', function (e) {
            //Prevents reloading
            e.preventDefault();

            let timeElements = timeValidation(hours, mins, seconds);

            if (timeElements) {

                const taskDiv = document.createElement("div");
                taskDiv.classList.add("taskDiv");

                const taskText = document.createElement("li");
                taskText.innerText = field.value;


                const taskTime = document.createElement("p");
                taskTime.innerText = timeElements.hval + ":" + timeElements.mval + ":" + timeElements.sval;

                taskDiv.appendChild(taskText);
                taskDiv.appendChild(taskTime);
                taskList.appendChild(taskDiv);

                store();

            }

            resetFields();

        }, false)


        //Manipulating added tasks
        taskList.addEventListener('click', function(e) {

            let clickedTask = e.target;
            if(clickedTask.classList.contains('taskDiv')) {
                if (clickedTask.classList.contains('done')) {
                    clickedTask.parentNode.removeChild(clickedTask);
                }
                else {
                    clickedTask.classList.add('done');
                }
                store();
            }
        }, false)

    });

    const store = () => window.localStorage.myitems = taskList.innerHTML;

    //Retrieve saved tasks
    const loadTasks = () => {
        let savedTasks = window.localStorage.myitems;

        if (savedTasks)
            taskList.innerHTML = savedTasks;
    }

    const resetFields = () => {
        field.value = "";
        hours.value = "";
        mins.value = "";
        seconds.value = "";
    }

    const timeValidation = (hours, mins, seconds) => {

        let hoursval = hours.value.toString();
        let minsval = mins.value.toString();
        let secondsval = seconds.value.toString();

        if(hoursval > 60 || minsval > 60 || secondsval > 60) {
            resetFields();
            alert("Invalid time values!");
            return false;
        }

        else {

            if (hoursval < 10)
                hoursval = '0' + hoursval;
            if (minsval < 10)
                minsval = '0' + minsval;
            if (secondsval < 10)
                secondsval = '0' + secondsval;

            return {
                hval:hoursval,
                mval:minsval,
                sval:secondsval
            };
        }
    }

    loadTasks();

})();