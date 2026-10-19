import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import site from "../data/site.json";

const linkClass = ({ isActive }) =>
  `block rounded px-3 py-2 font-medium ${
    isActive ? "bg-blush font-bold" : "hover:bg-paper"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b-2 border-ink bg-lilac">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-2xl font-extrabold">
          {site.name}
        </Link>

        <button
          className="rounded border-2 border-ink bg-blush px-3 py-1.5 font-medium md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? "Tutup" : "Menu"}
        </button>

        <ul
          className={`${open ? "block" : "hidden"} absolute left-0 right-0 top-full border-b-2 border-ink bg-lilac p-4 md:static md:flex md:gap-1 md:border-0 md:bg-transparent md:p-0`}
        >
          {site.nav.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}