
async function getUser(i){
    const res= await fetch("https://jsonplaceholder.typicode.com/users/"+i);
    if(!res.ok){
        throw new Error("Failed To fetch data");
    }
    return res.json();
}

const Page=async({params})=>{
    const user = await getUser(params.userid);
    return(
        <>
        <h2>Showing detail of user having id={params.userid}</h2>
        <h3>{user.name}</h3>
        <hr/>
        <p>
            {user.username} <br/>
            {user.email} <br/>
            {user.website} <br/>
            {user.phone} <br/>
        </p>
        </>
    )
}
export default Page;