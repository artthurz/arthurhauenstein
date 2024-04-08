"use server";

import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

interface LineProps {
  children: React.ReactNode;
}

export async function Line(props: LineProps) {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
      {props.children}
    </ul>
  );
}

interface MarkProps {
  lastIndex: number;
  index: number;
  name: string;
  institution: string;
  date: string;
  description: string;
  link: string;
  children?: React.ReactNode;
  background: string;
  textColor: string;
  fillColor: string;
}

export async function Mark(props: MarkProps) {
  return (
    <li>
      <hr
        className={cn(
          props.index === 0 ? "hidden" : "block",
          "bg-slate-300/40"
        )}
      />
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className={cn(
            "h-6 w-6 rounded-full",
            props.fillColor,
            props.background
          )}
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div
        className={cn(
          "mb-10 timeline-start",
          props.index % 2 === 0 ? "md:text-end" : "md:timeline-end"
        )}
      >
        <time className="font-mono italic">{props.date}</time>
        <div
          className={cn(
            "flex items-center gap-2 text-lg font-bold text-primary",
            props.index % 2 === 0 ? "md:flex-row-reverse" : ""
          )}
        >
          {props.name} - {props.institution}
          <div className="tooltip" data-tip="Acessar site">
            <Link
              className="btn btn-circle btn-ghost"
              href={props.link}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink className={cn("h-5 w-5", props.textColor)} />
            </Link>
          </div>
        </div>
        {props.description}
      </div>
      <hr
        className={cn(
          "bg-slate-300/40",
          props.index === props.lastIndex ? "hidden" : "block"
        )}
      />
    </li>
  );
}
