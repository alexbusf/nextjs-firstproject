import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'About',
  description: 'About page',
}


export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>
        <h1  className="text-3xl font-bold">About us</h1>
        <ul>
            <li>
                <Link href="/about/contacts">Contacts</Link>
            </li>
            <li>
                <Link href="/about/team">Team</Link>
            </li>
        </ul>
        {children}
      </div>
    )
  }