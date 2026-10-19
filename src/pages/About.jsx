import PageHeader from "../components/Pageheader.jsx";
import Card from "../components/Card.jsx";
import team from "../data/team.json";
import fotoTentang from "../assets/tentang.jpg"; 

const sejarah = [
  { year: "2019", text: "Lahir dari kecintaan terhadap seni botani, Nisa Bloom Florist memulai langkah pertamanya sebagai studio kreatif rumahan di Bandung yang melayani pemesanan buket kustom secara daring melalui media sosial." },
  { year: "2021", text: "Ekspansi Butik & Workshop Pertama Resmi membuka butik fisik pertamanya di kawasan strategis Jl. Setiabudi, Bandung. Fasilitas ini dilengkapi dengan ruang kerja tim florist profesional serta infrastruktur pendingin khusus untuk menjaga standar kesegaran bunga.Toko pertama dibuka di Jl. Setiabudi dengan satu ruang kerja dan lemari pendingin bunga." },
  { year: "2024", text: "Diversifikasi Layanan & Kemitraan KorporatMemperluas jangkauan bisnis dengan melayani dekorasi skala besar untuk pernikahan, acara perusahaan, serta menyelenggarakan creative workshop merangkai bunga untuk komunitas dan institusi." },
];
 
const misi = [
  "Menjaga Kualitas Kesegaran: Berkomitmen hanya menggunakan bunga segar pilihan kualitas terbaik yang dikurasi langsung dari perkebunan lokal terpercaya.",
  "Kreativitas yang Personal: Menciptakan desain rangkaian floral yang unik dan bermakna, disesuaikan secara khusus untuk mewakili setiap momen dan ekspresi pelanggan.",
  "Edukasi & Komunitas: Membagikan seni serta keindahan merangkai bunga kepada masyarakat luas melalui program workshop kreatif yang interaktif dan ramah pemula.",
];

export default function About() {
  return (
    <>
      <PageHeader
        title="Tentang Kami"
        subtitle="Studio florist profesional berbasis di Bandung yang mendedikasikan diri untuk merangkai keindahan alam menjadi ungkapan perasaan yang mendalam."
        bgImage={fotoTentang}
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-bold">Sejarah</h2>
        <ol className="mt-8 space-y-6 border-l-4 border-ink pl-6">
          {sejarah.map((h) => (
            <li key={h.year}>
              <p className="text-xl font-bold">{h.year}</p>
              <p className="max-w-2xl">{h.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-y-2 border-ink bg-blush">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Visi</h2>
            <p className="mt-3 text-lg">
              Menjadi studio florist terpercaya di Bandung yang dikenal atas dedikasinya terhadap kesegaran bunga mutlak, inovasi desain rangkaian yang estetis, serta keandalan layanan pengiriman tepat waktu.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Misi</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-lg">
              {misi.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-bold">Team</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          
          {team.map((m) => (
            <Card key={m.id} title={m.name} tag={m.role}>

                {m.photo && (
                <div className="mb-4 h-64 w-full overflow-hidden rounded border-2 border-ink bg-stone-100 shadow-sm">
                    <img
                    src={m.photo}
                    alt={`Foto ${m.name}`}
                        className="h-full w-full object-cover"
                    />
                </div>
             )}
            <div className="text-stone-700 leading-relaxed text-sm">
            {m.bio}
            </div>
            
        </Card>
        ))}


        </div>
      </section>
    </>
  );
}
