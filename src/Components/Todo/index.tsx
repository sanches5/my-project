import React, {FC} from 'react';
import './style.scss'

type TodoProps = {
    complete: boolean
    title: string
    id: number
    completedTodo: (id: number) => void
    handleDeleteTask: (id: number) => void
    dragStartHandler: (e: React.DragEvent<HTMLDivElement>) => void
    dropHandler: (e: React.DragEvent<HTMLDivElement>) => void
    dragOverHandler: (e: React.DragEvent<HTMLDivElement>) => void
    dragEndHandler: (e: React.DragEvent<HTMLDivElement>) => void
}

const Todo: FC<TodoProps> = (
    {
        title,
        id,
        complete,
        completedTodo,
        handleDeleteTask,
        dragStartHandler,
        dropHandler,
        dragOverHandler,
        dragEndHandler
    }) => {

    return (
        <div
        className={"todo"}
        draggable={true}
        onDragStart={dragStartHandler}
        onDrop={ dropHandler}
        onDragLeave={dragEndHandler}
        onDragEnd={dragEndHandler}
        onDragOver={dragOverHandler}
        >
        <div onClick={() => completedTodo(id)} className={`check ${complete ? "complete": ""}`}/>
        <p className={"textTodo"}>{title}</p>
        <button className={"removeButton"} onClick={() => handleDeleteTask(id)}>delete</button>
    </div>)
}

export default Todo;
