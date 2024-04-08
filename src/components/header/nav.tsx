"use server";

import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export async function Nav() {
  const t = useTranslations("root.navbar");

  return (
    <nav>
      <ul className="hidden md:flex items-center gap-x-8">
        <li>
          <Link className="hover:text-accent" href="#skills">
            {t("skills")}
          </Link>
        </li>
        <li>
          <Link className="hover:text-accent" href="#academic">
            {t("graduation")}
          </Link>
        </li>
        <li>
          <Link className="hover:text-accent" href="#courses">
            {t("courses")}
          </Link>
        </li>
        <li>
          <Link className="hover:text-accent" href="#contact">
            {t("contact")}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
