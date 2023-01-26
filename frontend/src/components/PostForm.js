import React, {useState} from 'react';
import Axios from 'axios'; 
import "../components/PostForm.css";

function PostForm() {

    const url = "http://localhost:8081/insert" 
    const [data, setData] = useState({
            ID: "",
            Name: "",
            TechStack:""
    })
    function submit(e) {
        e.preventDefault();
        Axios.post(url,{
            ID: data.ID,
            Name: data.Name,
            TechStack: data.TechStack
        })

        .then(res=> {
            console.log(res.data);
        })
    }


    function handle(e) {
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)  
    }



    return (
        <div className='PostFormComponent'>
            <form onSubmit={(e)=> submit(e)}>
               <center>
               <input onChange={(e)=>handle(e)} id="ID" value={data.ID} type="number" placeholder='Student ID Number' />
                <input onChange={(e)=>handle(e)} id="Name" value={data.Name} type="text" placeholder='Student Name' />
                <input onChange={(e)=>handle(e)} id="TechStack" value={data.TechStack} type="text" placeholder='Tech Stack (PFSD/MSWD)' />

                <button>Click here to submit the form</button>
               </center>

            </form>
        </div>
    );
}

export default PostForm; 