import { useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";
import { adduserlist } from "./actions/list.actions";

function AddList(){
    const {user_id} = useParams();
    const [title, setNewTitle] = useState();
    const [description, setNewDescription] = useState();
    const [due_date, setDueDate] = useState();
    const navigate = useNavigate();

    const handleAddList = () => {
        const adddue = formatDate(due_date)
        const addInfo = { title, description, due_date: adddue };
        console.log(addInfo)

        adduserlist(user_id, addInfo)
        .then(() => {
            alert("List Sucessfully Added")
            navigate(`/menu/${user_id}`);
        })
        .catch(error => {
            alert(error)
        });
    };
    
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate())
        const month = String(date.getMonth() + 1)
        const year = date.getFullYear();
        return`${year}-${month}-${day}`
    }

    return(
        <>
            <header className='bg-darkgray flex flex-row justify-around items-center'>
                <h1 className='text-lightblue my-4 text-4xl'>TodoList Web</h1>
                <ul className='flex flex-row'>
                    <li className='mx-2 px-2 text-lightblue text-2xl hover:text-lighterblue hover:cursor-pointer'><Link to={`/menu/${user_id}`}>List</Link></li>
                </ul>
            </header>
            <main className='min-h-screen w-full bg-darkblue flex flex-col justify-center items-center'>
                <section className='bg-darkgray px-4 py-4 border border-solid border-darkgray rounded-2xl flex flex-col items-center'>
                <h1 className='my-2 text-4xl text-lightblue'>Add List</h1>
                <p className='my-2 text-2xl text-lightblue'>Add New List To Track Your List</p>
                    <div>
                        <div className='mb-6 mt-4 mx-6'>
                            <label htmlFor="title" className='mr-4 text-xl text-lightblue'>Title</label>
                            <input type="text" name="title" id="title" value={title} onChange={(e) => setNewTitle(e.target.value)} className='px-2 py-2 text-lg border-2 border-lightblue rounded-lg w-full'/>
                        </div>
                        <div className='mt-6 mb-4 mx-6'>
                            <label htmlFor="description" className='mr-4 text-xl text-lightblue'>Description</label>
                            <input type="text" name="description" id="description" value={description} onChange={(e) => setNewDescription(e.target.value)} className='px-2 py-2 text-lg border-2 border-lightblue rounded-lg w-full'/>
                        </div>
                        <div className='mt-6 mb-4 mx-6'>
                            <label htmlFor="description" className='mr-4 text-xl text-lightblue'>Due Date</label>
                            <input type="date" name="due_date" id="due_date" value={due_date} onChange={(e) => setDueDate(e.target.value)} className='px-2 py-2 text-lg border-2 border-lightblue rounded-lg w-full'/>
                        </div>
                    </div>
                    <div className='my-4 flex flex-row items-center'>
                        <button className='px-4 py-4 mx-4  text-2xl text-lighterblue bg-darkblue border border-darkblue rounded-lg' onClick={handleAddList}>Add List</button>
                    </div>
                </section>
            </main>   
        </>
    );
}

export default AddList