"use server";

import { cn } from "@/lib/utils";
import { CalendarCheck, ExternalLink } from "lucide-react";
import React from "react";

interface LineProps {
  children: React.ReactNode;
}

export async function Line(props: LineProps) {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700 last:mb-0">
      {props.children}
    </ol>
  );
}

interface MarkProps {
  name: string;
  institution: string;
  date: string;
  description: string;
  link: string;
  children?: React.ReactNode;
  background: string;
  textColor: string;
}

export async function Mark(props: MarkProps) {
  return (
    <li className="mb-10 ms-6" data-aos="zoom-in-right">
      <span
        className={cn(
          `absolute flex items-center justify-center w-6 h-6  rounded-full -start-3 ring-8 ring-white dark:ring-gray-900`,
          props.background
        )}
      >
        <CalendarCheck className={cn("h-4 w-4", props.textColor)} />
      </span>
      <h3 className="my-6 mx-2 flex justify-between sm:justify-normal items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
        {props.name}
        <div
          className={cn(
            "flex justify-center items-center gap-2 me-2 px-2.5 py-0.5 rounded ms-3",
            props.background
          )}
        >
          <span className={cn(`text-sm font-medium`, props.textColor)}>
            {props.institution}
          </span>
          <a href={props.link} target="_blank" rel="noreferrer">
            <ExternalLink className={cn("h-4 w-4", props.textColor)} />
          </a>
        </div>
      </h3>
      <time className="flex items-center justify-between mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {props.date}
      </time>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {props.description}
      </p>
    </li>
  );
}
