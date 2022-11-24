"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-themed navbar-expand-lg">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className={usePathname() == "/" ? "active nav-item" : ""}><Link href="/" className='nav-link'>Home</Link></li>
          <li className={usePathname() == "/cardtypes" ? "active nav-item" : ""}><Link href="/cardtypes" className='nav-link'>Card Types</Link></li>
          <li className={usePathname() == "/extensions" ? "active nav-item" : ""}><Link className="nav-link disabled" href="/extensions">
            Extensions
          </Link></li>
        </ul>
      </div>
    </nav >
  )
}