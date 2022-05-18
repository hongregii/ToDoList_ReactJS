import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, ITodoState, toDoState } from "../atoms";

function ToDo({content, category, id}:ITodoState) {
    const setToDos = useSetRecoilState(toDoState);
    const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        const {currentTarget : { name },} = event;
        console.log(toDoState.key)
        setToDos(oldToDos => {
            const targetIndex = oldToDos.findIndex((toDo)=> toDo.id === id)
            const newToDo = { content, id, category : name as any};
            const front = oldToDos.slice(0, targetIndex);
            const back = oldToDos.slice(targetIndex + 1);
            const newToDos = [...front, newToDo, ...back];
            return newToDos;
        })
    };
    
    return (<li key={id}>
        <span>{content}</span>
        { category !== Categories.DOING && (<button name={Categories.DOING} onClick = {onClick}>Doing</button>) } 
        { category !== Categories.TO_DO && (<button name={Categories.TO_DO} onClick = {onClick}>To Do</button>) }
        { category !== Categories.DONE && (<button name={Categories.DONE} onClick = {onClick}>Done</button>) } 
        </li>);
}

export default ToDo;