import { Metadata } from "next";
import Link from "next/link";

//Get
async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      next: {
        revalidate: 360
      }
    })
    return response.json()
}

//Metadata
export const metadata: Metadata = {
    title: 'Users',
    description: 'Users page',
};
  
  //Users
export default async function Users() {
    const users = await getData()
    return (
        <>
          <h1  className="text-3xl font-bold">News</h1>
          <ul>
            {users.map((user: any) => (
              <li key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </li>
            ))}
          </ul>
        </>
    )
}