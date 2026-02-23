import data from "../../data.json";
import { Navigation } from "../components/nav";

export default function TimelinePage() {
  return (
    <div className="relative pb-16 pt-4">
      <Navigation />
      <div className="px-6 pt-16 mx-auto max-w-4xl lg:px-8 md:pt-24 lg:pt-28">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Career Timeline</h1>
        <p className="mt-3 text-zinc-400">Key milestones and transitions.</p>

        <div className="mt-10 border-l border-zinc-800 pl-6 space-y-8">
          {data.timeline.map((item) => (
            <article key={`${item.date}-${item.title}`} className="relative">
              <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-zinc-400" />
              <p className="text-xs uppercase tracking-wider text-zinc-500">{item.date}</p>
              <h2 className="mt-1 text-lg font-semibold text-zinc-200">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
