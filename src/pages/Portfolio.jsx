import { useState } from "react";
import PageHeader from "../components/Pageheader.jsx";
import Card from "../components/Card.jsx";
import projects from "../data/portfolio.json";
import clients from "../data/clients.json";
import portofolio from "../assets/porfo.jpg"; 

const categories = ["Semua", "Buket", "Dekorasi", "Workshop"];
const colors = ["bg-blush", "bg-white"];

export default function Portfolio() {
  const [active, setActive] = useState("Semua");
  const shown =
    active === "Semua"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      <PageHeader
        title="Portofolio"
        subtitle="Hasil rangkaian dan dekorasi kami untuk pelanggan dan acara."
        bgImage={portofolio}
      />
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded border-2 border-ink px-4 py-2 font-medium ${
                active === c ? "bg-blush font-bold" : "hover:bg-lilac"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => (
            <Card
              key={p.id}
              title={p.title}
              tag={p.category}
              footer={`Tahun ${p.year}`}
            >
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  className="mb-4 h-100 w-full rounded border-2 border-ink object-cover"
                />
              ) : (
                <div
                  className={`mb-4 flex h-32 items-end rounded border-2 border-ink p-3 text-lg font-bold ${colors[i % 2]}`}
                >
                  {p.title}
                </div>
              )}
              {p.description}
            </Card>
          ))}
        </div>

        <h2 className="mt-16 text-3xl font-bold">Klien</h2>
        <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {clients.map((c) => (
            <li
              key={c}
              className="rounded border-2 border-ink bg-white px-3 py-4 text-center font-medium"
            >
              {c}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
