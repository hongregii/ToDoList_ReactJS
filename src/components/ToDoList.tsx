import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";
import styled from 'styled-components';

const toDoState = atom<ITodoState[]>({
    key: 'toDo',
    default : [],
})

const Form = styled.form`
display: flex;
flex-direction: column;
`

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

interface ITodoForm {
    toDo: string;
}

interface ITodoState {
    content : string;
    category : "TO_DO" | 'DOING' | 'DONE' ;
    id : number;
}

function ToDoList() {

    const [todos, setTodos] = useRecoilState(toDoState);
    const { register, handleSubmit, setValue } = useForm<ITodoForm>();
    const handleValid = ({toDo}:ITodoForm) => {
        console.log('add to do : ', toDo);
        setTodos((oldToDos)=> [{ content:toDo, category:"TO_DO", id:Date.now(), }, ...oldToDos])
        setValue("toDo", "")
        console.log('todos : ', todos);
    }
    return(
        <div>
            <h1>To Do List</h1>
            <hr/> 
            <Form onSubmit={handleSubmit(handleValid)}>
               <input {...register('toDo', {required:"Please write a To-Do"})} placeholder="Write a To-do" />
               <button>Add</button> 
            </Form>
            <ul>
                {todos.map(toDo => <li key={toDo.id}>{toDo.content}</li>)}
            </ul>
        </div>
    )
}


export default ToDoList;