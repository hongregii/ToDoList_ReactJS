import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { categoryState, toDoSelector } from '../atoms';
import ToDo from "./ToDo";
import React from "react";


function ToDoList() {
    const toDos  = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState);
    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any)
    };
    return (
        <div>
            <h1>To Do List</h1>
            <hr/> 
            <select value={category} onInput={onInput}>
                <option value="TO_DO">To Do</option>
                <option value="DOING">Doing</option>
                <option value="DONE">Done</option>
            </select>
            <CreateToDo />
            { toDos?.map(toDo => <ToDo key={toDo.id} {...toDo} />)}
        </div>
    )
}

export default ToDoList;


// interface ILoginForm {
// email : string;
// name : string;
// username : string;
// password : string;
// password2 : string;
// extraError: string;
// }

// function LoginForm() {
//     const { register, handleSubmit, formState:{errors}, setError } = useForm<ILoginForm>();
//     const onValid = (data: ILoginForm) => {
//         if(data.password !== data.password2) {
//             setError("password", {message: "!!Passwords not Same!!"});
//             setError("extraError", {message:'알수없는 에러'})
//         }
//     }
    
//     return (
//     <div>
//     <Form onSubmit={handleSubmit(onValid)}>
//         <input {...register('email', {required: "!!Required!!", pattern:{value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9._%+-]+.[a-z]/, message:"Should be Email"}})} placeholder="email" />
//         <span>{errors?.email?.message}</span>
//         <input {...register('name', {required: "!!Required!!", minLength: {value: 5, message:"!!should be more than 5 characters!!"}})} placeholder="name" />
//         <span>{errors?.name?.message}</span>
//         <input {...register('username', {required: "!!Required!!", minLength: {value: 5, message:"!!should be more than 5 characters!!"}})} placeholder="username" />
//         <span>{errors?.username?.message}</span>
//         <input {...register('password', {required: "!!Required!!", minLength: {value: 5, message:"!!should be more than 5 characters!!"}})} placeholder="password" />
//         <span>{errors?.password?.message}</span>
//         <input {...register('password2', {required: "!!Required!!", minLength: {value: 5, message:"!!should be more than 5 characters!!"}})} placeholder="password2" />
//         <span>{errors?.password2?.message}</span>
//         <button>Add</button>
//     </Form>
//         <span>{errors?.extraError?.message}</span>
//         </div>
//     )
// }