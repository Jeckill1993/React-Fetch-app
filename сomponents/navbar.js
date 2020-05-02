import Link from 'next/link'

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/posts/new">
          <a>Create new post</a>
        </Link>
      </li>
    </ul>
  </nav>
)

export default NavBar;
