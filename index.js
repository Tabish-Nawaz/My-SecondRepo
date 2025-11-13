let ArrayOfTask = [];

function ShowUserMenu() {
    return prompt(
        "TO-DO LIST MENU\n" +
        "1 Add Task\n" +
        "2 Update Task\n" +
        "3 Delete Task\n" +
        "4 Search Task\n" +
        "5 Show Task\n" +
        "6 Switch Task\n" +
        "7 Sort Alphabetically\n" +
        "8 Exit\n\n" +
        "Enter the number (1 to 5)"
    );
}

function CollectIndex(Val) {
    let index = prompt("Select the Task Number");
    return index = parseInt(index) -1;
}

function AddTask() {
    let Task = prompt("Enter your task");
    if(Task === ""){
        alert("Error Empty Task Are not allowed");
    }else{
    ArrayOfTask.push(Task);
    }
}

function UpdateTask() {
    if(ArrayOfTask.length === 0){
        alert("No task to edit & update");
        return;
    }
    let index = CollectIndex();

    if(index >= 0 && index < ArrayOfTask.length){
    let Task = prompt("Enter the task");
    ArrayOfTask[index] = Task;
    alert(`Updated => ${Task}`);
    }else{
        alert("Error");
    }
}

function DeleteTask() {
    if(ArrayOfTask.length === 0){
        alert("Error");
        return;
    }
    let index = CollectIndex();

    if(index >= 0 && index < ArrayOfTask.length){
        ArrayOfTask.splice(index, 1);
        alert("Task Deleted");
    }else {
        alert("No task to deleted");
    }
}

function ShowTask() {
    if(ArrayOfTask.length === 0){
        alert("Nothing here add the task.");
        return;
    }else {
        let list = "Your Task\n";
        ArrayOfTask.forEach((tasks, i) => {
            list += `${i+1}. ${tasks}\n`;
        }); 
        alert(list);
   }
}

function SwithTask() {
    if(ArrayOfTask.length === 0){
        alert("Nothing here add the task.");
        return;
    }else if(ArrayOfTask.length < 2) {
        alert("Switch are not possible");
        
    }
    let Task_index1 = prompt("Select the Number of first task to you want to switch");
    Task_index1 = parseInt(Task_index1) -1;
    let Task_index2 = prompt("Select the Number of second task to you want to switch");
    Task_index2 = parseInt(Task_index2) -1;
    
    let Swap = ArrayOfTask[Task_index1];
    ArrayOfTask[Task_index1] = ArrayOfTask[Task_index2]
    ArrayOfTask[Task_index2] = Swap;
}

function SortingAflphabetically() {
    if(ArrayOfTask.length === 0){
            alert("No Task to Sort.");
            return;
        }else if(ArrayOfTask.length > 2){
            let Sort = ArrayOfTask.sort();
                Sort.forEach((i, list)=> {
                    list += `${i + 1}. ${list}\n`;
                });
            alert(Sort);
   }
}

function SearchTask() { 
    let GetValue = prompt("Search Here:"); 
    let found = false;

    for (let index = 0; index < ArrayOfTask.length; index++) { 
        if (ArrayOfTask[index] === GetValue) { 
            alert(`${index + 1}. ${GetValue}`); 
            found = true;
            break;
        }
    }
    if (!found) {
        alert("Something Went Wrong");
    }
}

while(true) {
    let choice = ShowUserMenu();

    if(choice === '1') AddTask();
    else if(choice === '2') UpdateTask();
    else if(choice === '3') DeleteTask();
    else if(choice === '4') SearchTask();
    else if(choice === '5') ShowTask();
    else if(choice === '6') SwithTask();
    else if(choice === '7') SortingAflphabetically();
    else if(choice === '8') {
            alert("You want to exit");
            break; 
        } else {
        alert("Invalid number. Please enter a valid number.");
    }
}
