import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categoryState, toDoState } from '../atoms';


interface ITodoForm {
    toDo: string;
}


const Form = styled.form`
display: flex;
flex-direction: column;
`

function CreateToDo() {
    const setTodos = useSetRecoilState(toDoState);
    const currentCategory = useRecoilValue(categoryState);
    const { register, handleSubmit, setValue } = useForm<ITodoForm>();
    const handleValid = ({ toDo }: ITodoForm) => {
        setTodos((oldToDos) => [
            { content:toDo, category:currentCategory, id:Date.now(), },
             ...oldToDos
            ]);
        setValue("toDo", "")
    }
    return (
    <Form onSubmit={handleSubmit(handleValid)}>
               <input {...register('toDo', {required:"Please write a To-Do"})} placeholder="Write a To-do" />
               <button>Add</button> 
            </Form>
)
}
export default CreateToDo;