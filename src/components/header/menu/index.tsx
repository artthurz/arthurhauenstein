"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useMediaQuery } from "@/hooks/use-media-query";
import { MoreVerticalIcon } from "lucide-react";
import React from "react";
import { LocaleSelector } from "./locale-selector";

export function Menu() {
  let [isOpen, setIsOpen] = React.useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return <React.Fragment />;
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} modal>
      <DialogTrigger>
        <MoreVerticalIcon className="-my-1 -mr-1 ml-1 md:hidden text-slate-500 w-6 h-6 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300" />
      </DialogTrigger>
      <DialogContent className="top-4 right-4 left-100 translate-x-0 translate-y-0 w-[75%] font-bold">
        <ul className="space-y-6">
          <li>
            <a
              className="hover:text-sky-500 dark:hover:text-sky-400"
              href="#skills"
              onClick={closeModal}
            >
              Competências
            </a>
          </li>
          <li>
            <a
              className="hover:text-sky-500 dark:hover:text-sky-400"
              href="#academic"
              onClick={closeModal}
            >
              Formação
            </a>
          </li>
          <li>
            <a
              className="hover:text-sky-500 dark:hover:text-sky-400"
              href="#courses"
              onClick={closeModal}
            >
              Cursos
            </a>
          </li>
          <li>
            <a
              className="hover:text-sky-500 dark:hover:text-sky-400"
              href="#contact"
              onClick={closeModal}
            >
              Contato
            </a>
          </li>
        </ul>
        <LocaleSelector onSelect={closeModal} />
      </DialogContent>
    </Dialog>
  );
}
