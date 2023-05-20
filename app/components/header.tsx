import Link from "next/link";

const Header = () => {
    return (
        <header  className="py-4 px-6 text-sm font-medium bg-cyan-200">
          <ul className="flex space-x-3">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/news">News</Link>
            </li>
            <li>
              <Link href="/users">Users</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </header>
    )
} 

export{Header};