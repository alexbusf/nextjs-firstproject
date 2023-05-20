import { Metadata } from "next"
import Link from "next/link"


//Get
async function getData(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
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
  const post = await getData(id)
  return {
    title: 'Next ' + post.title,
  };
}


export default async function NewsDetail({ params: {id}}: Props) {
    const post = await getData(id)
    return (
      <>
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p>{post.body}</p>
        <Link href={`/news/${post.userId}`}>{post.userId}</Link>
      </>
    )
  }