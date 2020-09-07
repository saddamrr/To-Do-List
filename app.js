var app = new Vue({
    el: "#app",
    data(){
        return {
            todos: [],
            todo: ""
        }
    },
    created() {
        this.loadLocalStorage();
    },
    watch: {
        todos(){
            localStorage.setItem("todos", JSON.stringify(this.todos));
        }
    },
    methods:
{
    addTodo() {
        this.todos.push(this.todo);
        this.todo = "";
    },
    deleteTodo(index) {
        this.todos.splice(index, 1);
    },
    loadLocalStorage() {
        const ls = JSON.parse(loadLocalStorage.getItem("todos"));
        console.log(ls);
        if(ls== null) {
            return;
        }
        this.todos = ls;
        console.log(this.todos);
    }
}
})

