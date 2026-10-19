import { useState } from "react";
import PageHeader from "../components/Pageheader.jsx";
import site from "../data/site.json";
import fotoKontak from "../assets/contact.jpg"; 

function validate({ name, email, message }) {
  const errors = {};
  if (!name.trim()) errors.name = "Nama wajib diisi.";
  if (!email.trim()) errors.email = "Email wajib diisi.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Format email belum benar.";
  if (message.trim().length < 10) errors.message = "Pesan minimal 10 karakter.";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  const field = "mt-1 w-full rounded border-2 border-ink bg-white px-3 py-2";

  return (
    <>
      <PageHeader
        title="Kontak"
        subtitle="Pesan bunga atau tanyakan layanan kami. Kami balas dalam 1 hari kerja."
        bgImage={fotoKontak}
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-14 lg:grid-cols-2">
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div>
            <label htmlFor="name" className="font-medium">Nama</label>
            <input id="name" name="name" type="text" value={form.name} onChange={handleChange} className={field} />
            {errors.name && <p className="mt-1 text-sm font-bold text-red-650">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="font-medium">Email</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className={field} />
            {errors.email && <p className="mt-1 text-sm font-bold text-red-650">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message" className="font-medium">Pesan</label>
            <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} className={field} />
            {errors.message && <p className="mt-1 text-sm font-bold text-red-650">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="rounded border-2 border-ink bg-blush px-5 py-3 font-bold hover:bg-lilac transition duration-200 cursor-pointer"
          >
            Kirim pesan
          </button>
          {sent && (
            <p className="rounded border-2 border-ink bg-lilac p-3 font-medium">
              Pesan terkirim. Terima kasih!
            </p>
          )}
        </form>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Alamat</h2>
            <p className="mt-2">{site.address}</p>
            <p>{site.phone}</p>
            <p>{site.email}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Media sosial</h2>
            <ul className="mt-2 space-y-1">
              {site.socials.map((s) => (
                <li key={s.name}>
                  <a href={s.url} target="_blank" rel="noreferrer" className="font-bold underline">
                    {s.name}
                  </a>
                  : {s.handle}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
