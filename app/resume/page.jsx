import data from "../../data.json";
import { Navigation } from "../components/nav";

export default function ResumePage() {
  const { resume } = data;

  return (
    <div className="relative pb-16 pt-4">
      <Navigation />
      <div className="px-6 pt-16 mx-auto max-w-5xl lg:px-8 md:pt-24 lg:pt-28">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Resume</h1>
        <p className="mt-3 text-zinc-400">{data.displayName} · {data.headline}</p>

        <section className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
          <h2 className="text-xl font-semibold text-zinc-100">Summary</h2>
          <p className="mt-3 leading-relaxed text-zinc-300">{data.summary}</p>
        </section>

        <section className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
          <h2 className="text-xl font-semibold text-zinc-100">Skills</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {resume.skills.map((skill) => (
              <span key={skill} className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-300">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
          <h2 className="text-xl font-semibold text-zinc-100">Experience</h2>
          <div className="mt-4 space-y-6">
            {resume.experience.map((job) => (
              <article key={`${job.role}-${job.company}`}> 
                <h3 className="text-lg font-medium text-zinc-200">{job.role} · {job.company}</h3>
                <p className="mt-1 text-sm text-zinc-500">{job.years}</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-300">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/40 p-6">
          <h2 className="text-xl font-semibold text-zinc-100">Education</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
            {resume.education.map((edu) => (
              <li key={edu}>{edu}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
