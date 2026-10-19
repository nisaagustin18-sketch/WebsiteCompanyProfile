import { Link } from "react-router-dom";
import Card from "../components/Card.jsx";
import services from "../data/services.json";

export default function Home() {
  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('public/image/cover.jpg')" }}
      >
        <div className="bg-white/70 py-14 sm:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-ink sm:text-5xl lg:text-6xl">
              Rangkaian Bunga Profesional untuk Setiap Momen Berharga Anda.
            </h1>
            <p className="mt-5 max-w-xl text-lg font-medium text-ink">
              Nisa Bloom Florist adalah penyedia layanan floral terpercaya di Bandung.
              Kami melayani pembuatan buket premium, bunga papan ucapan, hingga dekorasi spesial untuk berbagai acara formal maupun personal, dirangkai dengan bunga segar pilihan dan dikirim tepat waktu.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/layanan"
                className="rounded border-2 border-ink bg-blush px-5 py-3 font-bold text-ink hover:bg-lilac"
              >
                Lihat layanan
              </Link>
              <Link
                to="/kontak"
                className="rounded border-2 border-ink bg-white px-5 py-3 font-bold text-ink hover:bg-blush"
              >
                Pesan sekarang
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-ink bg-lilac">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 md:grid-cols-3">
          <h2 className="text-3xl font-bold">Tentang Nisa Bloom Florist</h2>
          <p className="text-lg md:col-span-2">
            Nisa Bloom Florist berdiri tahun 2019 di Bandung. Kami percaya
            bunga bisa menyampaikan hal yang sulit diucapkan, jadi setiap
            pesanan kami kerjakan dengan bunga segar pilihan dan rangkaian yang
            disesuaikan dengan momen kamu.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-bold">Layanan unggulan</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((s) => (
            <Card key={s.id} title={s.title}>
              {s.image && (
                <img
                  src={s.image}
                  alt={`Foto ${s.title}`}
                  className="mb-4 h-48 w-full rounded-lg border-2 border-ink object-cover"
                />
              )}
              {s.description}
            </Card>
          ))}
        </div>
        <Link to="/layanan" className="mt-8 inline-block font-bold underline">
          Lihat semua layanan
        </Link>
      </section>
    </>
  );
}