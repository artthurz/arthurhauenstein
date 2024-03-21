"use server";

import React from "react";

interface HighlightProps {
  amount: string;
  type: string;
}
export async function Highlight(props: HighlightProps) {
  return (
    <div className="group flex gap-4 items-center" data-aos="zoom-in-left">
      <div className="border-dashed border border-slate-800 dark:border-slate-200 group-hover:border-none group-hover:rotate-[360deg] group-hover:bg-gradient-to-bl from-sky-300 to-slate-200 dark:from-sky-600 dark:to-slate-900 transition-all ease-linear duration-500 flex items-center justify-center rounded-full h-24 w-24 min-h-24 min-w-24">
        <h2
          data-slot="amount"
          className="group-hover:scale-125 text-4xl text-sky-700 dark:text-sky-300 font-bold transition-all ease-linear duration-500"
        >
          {props.amount}
        </h2>
      </div>
      <h5 className="text-slate-900 dark:text-white text-2xl font-semibold">
        {props.type}
      </h5>
    </div>
  );
}
