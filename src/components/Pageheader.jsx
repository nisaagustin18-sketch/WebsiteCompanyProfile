export default function PageHeader({ title, subtitle, bgImage }) {
  return (
    <section 
      className="relative border-b-2 border-ink bg-lilac bg-cover bg-center"
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
    >
      {bgImage && (
        <div className="absolute inset-0 bg-paper/85 backdrop-blur-xs z-0"></div>
      )}

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-20 z-10">
        <h1 className="text-4xl font-extrabold sm:text-5xl text-ink">{title}</h1>
        <p className="mt-4 max-w-xl text-lg text-stone-800 font-medium">{subtitle}</p>
      </div>
    </section>
  );
}
