import PageHeader from "../components/Pageheader.jsx";
import Card from "../components/Card.jsx";
import services from "../data/services.json";
import fotoLayanan from "../assets/layanan.jpg"; 

export default function Services() {
  return (
    <>
      <PageHeader
        title="Layanan"
        subtitle="Dari buket kecil sampai dekorasi pernikahan, semua dirangkai dengan bunga segar."
        bgImage={fotoLayanan}
      />
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <Card key={s.id} title={s.title}>
              {s.image && (
                <img
                  src={s.image}
                  alt={`Foto ${s.title}`}
                  className="mb-4 h-100 w-full rounded-lg border-2 border-ink object-cover"
                />
              )}
              <p>{s.description}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
