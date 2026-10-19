import { Link } from "react-router-dom";
import site from "../data/site.json";

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-lilac">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="text-2xl font-extrabold">{site.name}</p>
          <p className="mt-2">
            Florist di Bandung untuk buket, bunga papan, dan dekorasi acara.
          </p>
        </div>

        <div>
          <p className="font-bold">Halaman</p>
          <ul className="mt-2 space-y-1">
            {site.nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-bold">Media sosial</p>
          <ul className="mt-2 space-y-1">
            {site.socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  {s.name}: {s.handle}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="border-t-2 border-ink bg-blush py-4 text-center text-sm">
        &copy; 2026 {site.name}.
      </p>
    </footer>
  );
}
