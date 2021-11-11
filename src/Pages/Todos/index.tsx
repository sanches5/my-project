import React, {useEffect, useState} from 'react';
import './style.scss'
import todo, {todoElem} from "./Todos-store";
import {observer} from "mobx-react-lite";
import Todo from "../../Components/Todo";
import FormTaskCreate from "../../Components/FormTaskCreate";



const Todos = observer(() => {
    const [textTask, setTextTask] = useState<string>("");
    const [todos, setTodos] = useState<todoElem[]>([]);
    const [currentTodo, setCurrentTodo] = useState<todoElem | null>(null);
    const [currentSorter, setSorter] = useState<string>("");

    useEffect(() => {
        setTodos(todo.getTodos());
    }, [])

    const handleSaveTask = (): void => {
        if (textTask.length < 70) {
            todo.addTodo(
                {
                    complete: false,
                    title: textTask,
                    id: todos.length ? todos[todos.length - 1].id + 1 : 1
                }, currentSorter);
            setTodos(todo.todos);
            setTextTask("");
        }
    }

    const handleDeleteTask = (id: number): void => {
        todo.removeTodo(id, currentSorter);
        setTodos(todo.todos);
    }

    const handleCompleteTask = (id: number): void => {
        todo.completedTodo(id, currentSorter);
        setTodos(todo.todos);
    }

    const handleSorterTasks = (sorter: string): void => {
        setTodos([...todo.getSorterTodos(sorter)]);
        setSorter(sorter);
    }


    const dragStartHandler = (event: React.DragEvent<HTMLDivElement>, todo: todoElem): void => {
        setCurrentTodo(todo)

    }

    const dropHandler = (event: React.DragEvent<HTMLDivElement>, todo: todoElem):void =>{
        event.preventDefault()

        setTodos(todos.map(t => {
            if(t.id === todo.id && currentTodo) {
                return {...currentTodo}
            }
            if(currentTodo && t.id === currentTodo.id) {
                return {...todo}
            }
            return t
        }))
        event.currentTarget.style.background = "white"
        setCurrentTodo(null)
    }

    const dragEndHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.currentTarget.style.background = "white"
    }

    const dragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        event.currentTarget.style.background = "lightgray"
    }

    return <div className={"todos"}>
        <div className={"todosHeader"}>
            <FormTaskCreate
                textTask={textTask}
                setTextTask={setTextTask}
                handleSaveTask={handleSaveTask}
            />

            <div
                className={"buttonSorter"}
                onClick={() => handleSorterTasks(
                    currentSorter === 'completed' ? 'notCompleted'
                        : (currentSorter === 'notCompleted') ? "" : 'completed'
                )}
            >
                <div className={`${currentSorter === 'completed' ? 'completed' : ''} sorterUp`}/>
                <div className={`${currentSorter === 'notCompleted' ? 'notCompleted' : ''} sorterDown`}/>
            </div>
        </div>

        <div className={"todosList"}>
            {todos.map((t) => (
                <Todo
                    completedTodo={handleCompleteTask}
                    dragOverHandler={dragOverHandler}
                    dragEndHandler={dragEndHandler}
                    key={t.id} complete={t.complete}
                    id={t.id}
                    handleDeleteTask={handleDeleteTask}
                    title={t.title}
                    dragStartHandler={(event: React.DragEvent<HTMLDivElement>) => dragStartHandler(event, t)}
                    dropHandler={(event: React.DragEvent<HTMLDivElement>) => dropHandler(event, t)}
                />
            ))}
        </div>
    </div>
})

export default Todos;
