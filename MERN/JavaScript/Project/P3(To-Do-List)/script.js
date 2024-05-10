let btn = document.getElementById('btn')
let todolist = document.getElementById('todo-list')

btn.addEventListener('click', function () {
    let input = document.getElementById('input').value
    addTodo(input)
    document.getElementById('input').value = '';
})

function addTodo(val) {
    let list = document.createElement('li');
    list.innerHTML = `${val}`;
    todolist.appendChild(list)


    list.addEventListener('click', function () {
        this.classList.toggle('line')
    })
}
