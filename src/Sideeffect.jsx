import axios from "axios";
import { useEffect, useState } from "react";


function Sideffect(){
    var [post,setPost]=useState([])
    var [cnt,Setcnt]= useState(0)
    var[text,setText]=useState("")
    var handlecnt=()=>{
        Setcnt(cnt+1)
    }
    useEffect(()=>{
        //console.log("Your count is incrementing");//
        //axios.get("https://jsonplaceholder.typicode.com/posts").then((res) =>{
        axios.get("https://fakestoreapi.com/products").then((res) =>{
            console.log(res);
           setPost(res.data)
    }).catch((err)=> {
console.log(err);
    })

    });

    return(
        <div>
            <h1>Count: {cnt}</h1>
            <button onClick={handlecnt}>ADD</button>
            <input type="text" value={text} onChange={e => {setText(e.target.value);}}/>
            <h2>This is {text}</h2>
          <h1>Axios data getting</h1>
        
            
          <div className="grid-container">
                {post.map(data => (
                    <div key={data.id} className="grid-item">
                        <img src={data.image} alt={data.title} />
                        <h3>{data.title}</h3>
                    </div>
                ))}
            </div>
       
        </div>
    )
};
export default Sideffect;
