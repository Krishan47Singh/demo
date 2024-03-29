
import Link from "next/link";

export const metadata={
    title: 'users',
    description: 'users related stuff goes here',
}

async function getUsers(){
    const res= await fetch("https://jsonplaceholder.typicode.com/users");
    if(!res.ok){
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

const Page=async()=>{
    const users = await getUsers();
    console.log(users);
    return(
        <>
        <h2>Showing all the users from API</h2>
        {
            users.map(user=>{return(
                <div key={user.id}>
                    <p>
                        <Link href={'/userdetail/' + user.id}>{user.name}</Link>
                    </p>
                </div>
            )})
        }
        </>
    )
}
export default Page;