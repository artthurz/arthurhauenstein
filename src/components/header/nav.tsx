"use server";

import { Link } from "@/navigation";

export async function Nav() {
  return (
    <nav>
      <ul className="hidden md:flex items-center gap-x-8">
        <li>
          <Link className="hover:text-accent" href="#skills">
            Competências
          </Link>
        </li>
        <li>
          <Link className="hover:text-accent" href="#academic">
            Formação
          </Link>
        </li>
        <li>
          <Link className="hover:text-accent" href="#courses">
            Cursos
          </Link>
        </li>
        <li>
          <Link className="hover:text-accent" href="#contact">
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
}
