import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ButtonProps {
  name: string;
  link: string;
  children: React.ReactNode;
  className: string;
}

function Button(props: ButtonProps) {
  return (
    <Link
      className={cn(
        "duration-200 gap-2 bg-opacity-80  p-2 font-semibold text-[1.2rem] text-white inline-flex items-center space-x-2 rounded shadow-xl ring-1 ring-slate-900/5 dark:shadow-white/5 dark:ring-0",
        props.className
      )}
      href={props.link}
      target="_blank"
      rel="noreferrer"
    >
      {props.children}
      {props.name}
      <ChevronRight className="w-6 h-6" />
    </Link>
  );
}

export function ContactSection() {
  return (
    <section id="contact">
      <div className="mb-12 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="w-16 h-16 p-[0.1875rem] rounded-full ring-1 ring-slate-900/10 shadow overflow-hidden dark:bg-blue-500 dark:shadow-white/20">
          <div className="h-full w-full aspect-w-1 aspect-h-1 bg-[length:100%] bg-[url('/images/section/contact-light.png')] dark:bg-[url('/images/section/contact-dark.png')]" />
        </div>
        <h2 className="mt-8 font-semibold text-blue-500 dark:text-blue-400">
          Entre em contato
        </h2>
        <p className="mt-4 text-3xl sm:text-4xl text-primary font-extrabold tracking-tight">
          Precisando de um desenvolvedor? Vamos trabalhar juntos.
        </p>
        <p className="mt-4 max-w-3xl space-y-6">
          Utilize as redes abaixos para me contatar, estou a disposição para
          responder suas dúvidas
        </p>
      </div>
      <div className="relative pt-10 xl:pt-0 mt-10 xl:mt-2">
        <div className="hidden dark:block absolute inset-x-0 h-[8rem] bg-gradient-to-b from-[#0c1120] top-0 xl:top-8" />
        <div className="absolute top-0 inset-x-0 bg-top bg-no-repeat bg-[url('/images/beams-background/beams-blue-light.jpg')] dark:bg-[url('/images/beams-background/beams-blue-dark.png')] [background-size:62.5rem] [height:8rem] xl:top-8 [mask-image:linear-gradient(0deg,transparent,black)]" />
        <div className="absolute inset-x-0 h-[8rem] bg-[url('/images/bg-grid-slate-900.svg')] bg-top [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-[url('/images/bg-grid-slate-400.svg')] dark:bg-[center_top_-1px] dark:border-t dark:border-slate-100/5 top-0 xl:top-8" />
        <div className="relative h-44 sm:h-32 lg:h-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div
            className="flex flex-wrap justify-center gap-4"
            data-aos="zoom-in-up"
          >
            <Button
              className="hover:bg-green-400 dark:hover:bg-green-800 bg-green-600"
              name="WhatsApp"
              link="https://api.whatsapp.com/send/?phone=5551999891443&text=Hello Arthur, i`m reaching you from arthurhauenstein.com."
            >
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#fff"
                  d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                ></path>
                <path
                  fill="#fff"
                  d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                ></path>
                <path
                  fill="#cfd8dc"
                  d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                ></path>
                <path
                  fill="#40c351"
                  d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                ></path>
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Button>
            <Button
              className="hover:bg-blue-400 dark:hover:bg-blue-800 bg-blue-600"
              name="LinkedIn"
              link="https://www.linkedin.com/in/arthur-hauenstein-646558131"
            >
              <svg
                className="w-8 h-8 fill-current"
                role="img"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path>
                </g>
              </svg>
            </Button>
            <Button
              className="hover:bg-blue-300 dark:hover:bg-blue-700 bg-blue-500"
              name="Email"
              link="mailto:hauenstein.contact@gmail.com"
            >
              <Image
                className="w-8 h-8"
                src="/images/social-media/email-icon.svg"
                alt="Email"
                height={80}
                width={80}
              />
            </Button>
            <Button
              className="hover:bg-gray-500 dark:hover:bg-gray-800 bg-gray-700"
              name="Github"
              link="mailto:hauenstein.contact@gmail.com"
            >
              <svg
                className="w-8 h-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </Button>
            <Button
              className="hover:bg-pink-300 dark:hover:bg-pink-700 bg-pink-500"
              name="Instagram"
              link="https://www.instagram.com/arthur.hauenstein/"
            >
              <Image
                className="w-8 h-8"
                src="/images/social-media/instagram.svg"
                alt="Instagram"
                height={80}
                width={80}
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
