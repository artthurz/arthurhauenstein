import { Line, Mark } from "./timeline";

const courses = [
  {
    name: "Carreira .NET Developer",
    institution: "Balta",
    description:
      "Desenvolvimento e Arquitetura backend em C# e .NET pelo 11x Microsfot MVP André Baltieri.",
    date: "10/2023",
    link: "https://balta.io",
    background: "bg-blue-100 dark:bg-blue-900",
    textColor: "text-blue-800 dark:text-blue-300",
  },
  {
    name: "UX Unicórnio",
    institution: "por Leandro Rezende",
    description:
      "Formação em UI/UX Design do zero ao nível profissional de Design de Experiência do Usuário.",
    date: "04/2023",
    link: "https://uxunicornio.com.br/2023/",
    background: "bg-pink-100 dark:bg-pink-900",
    textColor: "text-pink-800 dark:text-pink-300",
  },
  {
    name: "Backend Development - NestJS",
    institution: "por Ariel Weinberger",
    description: "Desenvolvimento moderno de backend com foco em NestJS.",
    date: "09/2021",
    link: "https://www.udemy.com/course/nestjs-zero-to-hero/",
    background: "bg-red-100 dark:bg-red-900",
    textColor: "text-red-800 dark:text-red-300",
  },
  {
    name: "Formação em React Native",
    institution: "Rocketseat",
    description:
      "Curso completo de React Native. Utilizado diversas ferramentas importantes como TypeScript, Expo, Styled Components, Async Storage, Autenticação Social, Animações, Context API, Hooks, Jest e diversas outras.",
    date: "04/2021",
    link: "https://www.rocketseat.com.br/formacao/react-native",
    background: "bg-purple-100 dark:bg-purple-900",
    textColor: "text-purple-800 dark:text-purple-300",
  },
  {
    name: "Formação em React",
    institution: "Rocketseat",
    description:
      "Curso completo de React.JS. Utilizado diversas ferramentas importantes como TypeScript, Next.JS, Styled Components, SASS, Context API, Hooks, Jest e diversas outras.",
    date: "04/2021",
    link: "https://www.rocketseat.com.br/formacao/react",
    background: "bg-purple-100 dark:bg-purple-900",
    textColor: "text-purple-800 dark:text-purple-300",
  },
  {
    name: "Formação em Node",
    institution: "Rocketseat",
    description:
      "Curso completo de Node.JS. Utilizado diversas ferramentas importantes como TypeScript, Rest, SOLID, Docker, TypeORM, JWT, bcrypt, Jest e diversas outras.",
    date: "04/2021",
    link: "https://www.rocketseat.com.br/formacao/node",
    background: "bg-purple-100 dark:bg-purple-900",
    textColor: "text-purple-800 dark:text-purple-300",
  },
  {
    name: "Formação Full-Stack",
    institution: "Rocketseat",
    description:
      "Bootcamp intensivo de 6 meses com foco em React.JS, React Native e Node.JS do zero ao deploy. Incluindo testes automatizados, integração contínua, publicação nas stores, e todas as biliotecas e frameworks importantes.",
    date: "10/2019",
    link: "https://www.rocketseat.com.br/formacao/fullstack",
    background: "bg-purple-100 dark:bg-purple-900",
    textColor: "text-purple-800 dark:text-purple-300",
  },
];

export function Content() {
  return (
    /* @ts-expect-error Server Component */
    <Line>
      {courses.map((course, index) => (
        /* @ts-expect-error Server Component */
        <Mark key={index} {...course} />
      ))}
    </Line>
  );
}
