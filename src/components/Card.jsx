export default function Card({ title, tag, footer, children }) {
  return (
    <article className="flex flex-col rounded-lg border-2 border-ink bg-white p-6">
      {tag && (
        <span className="mb-3 w-fit rounded bg-blush px-2 py-1 text-xs font-bold">
          {tag}
        </span>
      )}
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="mt-2 flex-1">{children}</div>
      {footer && (
        <div className="mt-4 border-t-2 border-ink/20 pt-3 text-sm">{footer}</div>
      )}
    </article>
  );
}