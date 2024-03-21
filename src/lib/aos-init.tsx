"use client";

import AOS from "aos";
import React from "react";
import "aos/dist/aos.css";

export default function AOSInit() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
    });
  }, []);

  return <></>;
}
