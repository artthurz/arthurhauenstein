"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { MoreVerticalIcon, X } from "lucide-react";
import React from "react";
import { LocaleSelector } from "./locale-selector";
import { createPortal } from "react-dom";
import { useMounted } from "@/hooks/use-mounted";

export function Menu() {
  const dialogRef = React.useRef<HTMLDialogElement>(null);
  const mounted = useMounted();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop || !mounted) {
    return <React.Fragment />;
  }

  return (
    <React.Fragment>
      <button
        onClick={() => dialogRef.current?.showModal()}
        className="btn btn-ghost px-2"
      >
        <MoreVerticalIcon className="w-6 h-6 flex items-center justify-center hover:text-slate-600 dark:hover:text-slate-300" />
      </button>
      {createPortal(
        <dialog
          ref={dialogRef}
          className="modal modal-bottom sm:modal-middle"
          role="dialog"
        >
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                <X className="w-6 h-6" />
              </button>
            </form>
            <ul className="space-y-6">
              <li>
                <span>
                  <a
                    className="hover:text-accent"
                    href="#skills"
                    onClick={() => dialogRef.current?.close()}
                  >
                    Competências
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <a
                    className="hover:text-accent"
                    href="#academic"
                    onClick={() => dialogRef.current?.close()}
                  >
                    Formação
                  </a>
                </span>
              </li>
              <li>
                <a
                  className="hover:text-accent"
                  href="#courses"
                  onClick={() => dialogRef.current?.close()}
                >
                  Cursos
                </a>
              </li>
              <li>
                <a
                  className="hover:text-accent"
                  href="#contact"
                  onClick={() => dialogRef.current?.close()}
                >
                  Contato
                </a>
              </li>
            </ul>
            <LocaleSelector onSelect={() => dialogRef.current?.close()} />
          </div>
          <label
            className="modal-backdrop"
            onClick={() => dialogRef.current?.close()}
          >
            Close
          </label>
        </dialog>,
        document.body
      )}
    </React.Fragment>
  );
}
