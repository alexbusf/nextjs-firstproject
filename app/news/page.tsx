import { Metadata } from "next"
import Link from "next/link";
import next from "next/types";

//Get
async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 360
    }
  })
  return response.json()
}

//Metadata
export const metadata: Metadata = {
  title: 'News',
  description: 'News page',
};

//News
export default async function News() {
    const posts = await getData()
    return (
      <>
        <h1  className="text-3xl font-bold">News</h1>
        <ul>
          {posts.map((post: any) => (
            <li key={post.id}>
            <Link href={`/news/${post.id}`}>{post.title}</Link>
          </li>
          ))}
        </ul>
      </>
    )
  }