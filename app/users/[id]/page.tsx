import { Metadata } from "next"
import Link from "next/link"

//Get
async function getData(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      next: {
        revalidate: 360
      }
    })
    return response.json()
  }
  
  type Props = {
      params: {
          id: string
      }
  }
  
  export async function generateMetadata({ params: {id}}: Props): Promise<Metadata> {
    const user = await getData(id)
    return {
      title: 'Next ' + user.name,
    };
  }
  
  
export default async function UserDetail({ params: {id}}: Props) {
    const user = await getData(id)
    return (
    <>
        <h1 className="text-3xl font-bold">{user.name}</h1>
        <p>Name: {user.name}</p>
        <p>City: {user.address.city}</p>
        <p>Company: {user.company.name}</p>
    </>
    )
}