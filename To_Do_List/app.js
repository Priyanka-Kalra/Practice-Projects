const tasks = [];

let command = prompt("Enter your required command");
while (command !== 'quit') {
    if (command == 'new') {
        let task = prompt('Enter the task');
        tasks.push(task);
        console.log(task + ' added to list');
    }
    else if (command == 'list') {

        let size = tasks.length;
        if (size == 0) console.log('List is empty');
        else {
            for (let i = 0; i < size; i++) {
                console.log(`${i}: ${tasks[i]}`);
            }
        }
    }

    else if (command == 'delete') {
        let index = prompt('Enter the index for which task is to be delete');

        if (index >= tasks.length) console.log('Task does not exist');
        else tasks.splice(index, 1);
    }
    else if (command == 'quit') break;
    console.log('*'.repeat(20));
    command = prompt('Enter a task');
}
console.log('You Quit!! Please use again');