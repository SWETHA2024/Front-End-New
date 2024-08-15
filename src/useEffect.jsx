import{useEffect,useState} from "react";

function SideEffects()
{
    var[count,setCount]=useState(0);
    var handleCount=()=>{
        setCount(count+1)
    }
    useEffect(()=>{
        console.log("Your count is incrementing")
    },[
        count])
    return(
    <div>
        <h1>
            Count:{count}
        </h1>
        <button onClick={handleCount}>Add</button>
    </div>
    )
}
export default SideEffects