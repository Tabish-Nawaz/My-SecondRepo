let Task_Array = [];

function ShowMenu() {
    return prompt(
        "TO-DO LIST MENU\n" +
        "1 Add Task\n" +
        "2 Update Task\n" +
        "3 Delete Task\n" +
        "4 Show Task\n" +
        "5 Exit\n\n" +
        "Enter the number (1 to 5)" 
    );
}

function AddTask() {
    let UserTask = prompt("Enter the Task");
    if(Task_Array === "") {
        alert("Empty Task are not Allowed");
    }else {
        Task_Array.push(UserTask);
        alert("Task Added");
    }
}

function updateTask() {
    if(Task_Array.length === 0){
        alert("Empty Task");
        return;
    }
    let index = prompt("Enter the number of the task");
    index = parseInt(index) - 1;

    if (index >= 0 && index < Task_Array.length) {
        let NewTask = prompt("Enter your New Task");
        Task_Array[index] = NewTask;
        alert("Task Updated");
    } else {
        alert("Invalid the task Number");
    }
}

function DeleteTask() {
    if(Task_Array.length === 0) {
        alert("Empty Task");
        return;
    }
    let index = prompt("Enter the task number");
    index = parseInt(index) -1;

    if(index >= 0 && index < Task_Array.length){
        let Delete = Task_Array.splice(index , 1);
        alert(`Task Deleted: ${Delete}`);
    }else {
        alert("Error");
    }
}

function ShowTask() {
    if(Task_Array.length === 0){
        alert("Empty Tasks");
    }else {
        let list = "Your Task: \n";
        Task_Array.forEach((task,i) =>{
            list += `${i + 1}. ${task}\n `
        });
        alert(list);
    }
}

while(true) {
    let choice = ShowMenu();

    if(choice === '1') AddTask();
    else if(choice === '2') updateTask();
    else if(choice === '3') DeleteTask();
    else if(choice === '4') ShowTask();
    else if(choice === '5') {
        alert("Exiting....");
        break;
    }else{
        alert("Invalid Choise");
    }
}
