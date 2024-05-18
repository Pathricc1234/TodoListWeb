import { Link, useParams } from "react-router-dom";
import { getuserlist, deletelist } from "./actions/list.actions";
import { useEffect, useState } from "react";

function Menu(){
    const {user_id} = useParams();
    const [lists, setList] = useState([]);

    const handleuserlist = () => {
        getuserlist(user_id)
        .then(data => {
            setList(data);
        })
        .catch(error => {
            alert(error);
        });
    }

    const handledeletelist = (title, description, due_date) => {
        const deldue_date = formatDateForAPI(due_date);
        const deleteInfo = {title, description, due_date: deldue_date};
        deletelist(user_id, deleteInfo)
        .then(() => {
            alert("Task Deleted Successfully");
            handleuserlist();
        })
        .catch(error => {
            alert(error);
        });
    }

    useEffect(() => {
        handleuserlist();
    }, [])

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate())
        const month = String(date.getMonth() + 1)
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }

    const formatDateForAPI = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${year}-${month}-${day}`;
    }

    return(
        <>
            <header className='bg-darkgray flex flex-row justify-around items-center'>
                <h1 className='text-lightblue my-4 text-4xl'>TodoList Web</h1>
                <ul className='flex flex-row'>
                    <li className='mx-2 px-2 text-lightblue text-2xl hover:text-lighterblue hover:cursor-pointer'><Link to={`/add/${user_id}`}>Add List</Link></li>
                    <li className='mx-2 px-2 text-lightblue text-2xl hover:text-lighterblue hover:cursor-pointer'><Link to="/login">Log Out</Link></li>
                </ul>
            </header>
            <main className='min-h-screen w-full bg-darkblue flex flex-col justify-center items-center'>
                {lists.map((list) => 
                    <article className="my-8 mx-4 max-w-screen-md h-auto bg-darkgray border border-darkgray rounded-lg flex flex-row justify-center items-center">
                        <div className="flex flex-col">
                            <h1 className='px-6 pt-6 my-2 text-lightblue text-4xl text-center'>{list.title}</h1>  
                            <h1 className='px-6 pb-6 my-2 text-lightblue text-2xl'>{list.description}</h1>
                            <h1 className='px-6 pb-6 my-2 text-lightblue text-2xl'>{formatDate(list.due_date)}</h1>
                        </div>
                        <div className="px-8 flex flex-col items-center">
                            <i className="fas fa-trash text-xl text-lightblue hover:text-lighterblue hover:cursor-pointer" onClick={() => 
                            handledeletelist(list.title, list.description, list.due_date)}>
                            </i>
                        </div>
                    </article>
                )}
            </main>
        </>
    );
}

export default Menu;