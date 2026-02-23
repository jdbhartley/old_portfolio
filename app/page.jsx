import Link from "next/link";
import Image from "next/image";
import data from "../data.json";
import { getUser, getRepos } from "./data";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Timeline", href: "/timeline" },
  { name: "Contact", href: "/contact" },
];

export default async function Home() {
  const username = process.env.GITHUB_USERNAME || data.githubUsername;

  const [user, repos] = await Promise.all([getUser(username), getRepos(username)]);

  const activeRepos = (repos || [])
    .filter((r) => !r.private && !r.archived && !r.fork)
    .length;

  return (
    <div className="min-h-screen bg-linear-to-b from-black via-zinc-950 to-black text-zinc-100">
      <header className="mx-auto max-w-6xl px-6 py-8 sm:py-10">
        <nav className="flex flex-wrap items-center gap-5 text-sm text-zinc-400">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-zinc-100 transition-colors">
              {item.name}
            </Link>
          ))}
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-20">
        <section className="grid gap-10 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-8 shadow-2xl shadow-black/30 backdrop-blur sm:grid-cols-[1fr_auto] sm:items-center sm:p-12">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">{data.headline}</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {data.displayName}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              {user?.bio || data.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/projects" className="rounded-md border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm hover:bg-zinc-700 transition">
                View Projects
              </Link>
              <Link href="/resume" className="rounded-md border border-zinc-700 px-4 py-2 text-sm hover:bg-zinc-800 transition">
                View Resume
              </Link>
              <a href={data.linkedin} target="_blank" rel="noreferrer" className="rounded-md border border-zinc-700 px-4 py-2 text-sm hover:bg-zinc-800 transition">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src={user?.avatar_url || data.avatarUrl || "/favicon.ico"}
              alt={data.displayName}
              width={132}
              height={132}
              className="rounded-full border border-zinc-700 shadow-lg shadow-black/40"
            />
          </div>
        </section>

        <section className="mt-10 grid gap-4 sm:grid-cols-3">
          <Stat title="Location" value={data.location} />
          <Stat title="GitHub Repositories" value={`${activeRepos}+`} />
          <Stat title="Primary Stack" value="C# · .NET · TypeScript" />
        </section>
      </main>
    </div>
  );
}

function Stat({ title, value }) {
  return (
    <article className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
      <p className="text-xs uppercase tracking-wider text-zinc-500">{title}</p>
      <p className="mt-2 text-base font-medium text-zinc-200">{value}</p>
    </article>
  );
}
