import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoGlobe, GoMail } from "react-icons/go";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import data from "../../data.json";

const contacts = [
  {
    icon: <GoMail size={20} />,
    href: `mailto:${data.email}`,
    label: "Email",
    handle: data.email,
  },
  {
    icon: <FaLinkedin size={20} />,
    href: data.linkedin,
    label: "LinkedIn",
    handle: "linkedin.com/in/jdbhartley",
  },
  {
    icon: <FaGithub size={20} />,
    href: `https://github.com/${data.githubUsername}`,
    label: "GitHub",
    handle: data.githubUsername,
  },
  {
    icon: <GoGlobe size={20} />,
    href: data.website,
    label: "Website",
    handle: "jameshartley.dev",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-linear-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-2 lg:gap-10 max-w-5xl">
          {contacts.map((c) => (
            <Card key={c.label}>
              <Link
                href={c.href}
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-20 md:p-12 sm:p-8"
              >
                <span className="absolute w-px h-2/3 bg-linear-to-b from-zinc-500 via-zinc-500/50 to-transparent" aria-hidden="true" />
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-300 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200">
                  {c.icon}
                </span>
                <div className="z-10 flex flex-col items-center">
                  <span className="whitespace-nowrap text-xl font-medium duration-150 lg:text-2xl text-zinc-200 group-hover:text-white font-display">
                    {c.handle}
                  </span>
                  <span className="mt-3 text-sm text-center duration-300 text-zinc-400 group-hover:text-zinc-200">
                    {c.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
