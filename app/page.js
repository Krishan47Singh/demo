
'use client'
import {useRouter} from "next/navigation";

const Page=()=>{
    const r=useRouter();
    return(
        <>
        <h2>Home</h2>
        <p>
            Text for Home Component goes here....
        </p>
        <input type="button" value="Go To Feedback" onClick={()=>r.push("./feedback")} />
        </>
    )
}
export default Page;