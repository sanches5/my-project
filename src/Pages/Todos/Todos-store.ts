import {makeAutoObservable} from "mobx";

export type todoElem = {
    complete: boolean
    title: string
    id: number
}

class Todo {
    todos: todoElem[] = []
    initialTodos: todoElem[] = []

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo: todoElem, sorter: string) {
        this.initialTodos.push(todo)
        this.getSorterTodos(sorter)
        localStorage.setItem("todos", JSON.stringify(this.initialTodos))
    }

    removeTodo(id: number, sorter: string) {
        this.initialTodos = this.initialTodos.filter(t => t.id !== id);
        this.getSorterTodos(sorter)
        localStorage.setItem("todos", JSON.stringify(this.initialTodos))
    }

    completedTodo(id: number, sorter: string) {
        this.initialTodos.forEach(todo => {
            if (todo.id === id) {
                todo.complete = !todo.complete;
            }
        });
        this.getSorterTodos(sorter)

        localStorage.setItem("todos", JSON.stringify(this.initialTodos))
    }

    getSorterTodos(sorter: string) {
        this.todos = [...this.initialTodos]
        if (sorter === 'completed') {
            return [...this.todos.sort((prevTodo: any, nextTodo: any) => nextTodo.complete - prevTodo.complete)];
        }

        if (sorter === 'notCompleted') {
            return [...this.todos.sort((prevTodo: any, nextTodo: any) => prevTodo.complete - nextTodo.complete)];
        }

        if (sorter === '') {
            this.todos = this.initialTodos;
            return  this.initialTodos;
        }

        return [...this.initialTodos];
    }

    getTodos() {
        const todosLocal: string | null = localStorage.getItem("todos");
        this.todos = JSON.parse(todosLocal || "") || [];
        this.initialTodos = this.todos;
        return this.todos;
    }
}

const todo = new Todo()

export default todo