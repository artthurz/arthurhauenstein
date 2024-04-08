import { Line, Mark } from "./timeline";

const Teste = (
  <div className="bg-[linear-gradient(rgb(154,52,18),transparent,rgb(107,33,168)]"></div>
);

const courses = [
  {
    name: "Carreira .NET Developer",
    institution: "Balta",
    description:
      "Desenvolvimento e Arquitetura backend em C# e .NET pelo 11x Microsfot MVP André Baltieri.",
    date: "10/2023",
    link: "https://balta.io",
    background: "bg-blue-800 dark:bg-blue-300",
    textColor: "text-blue-800 dark:text-blue-300",
    fillColor: "fill-blue-100 dark:fill-blue-900",
    lineGradiant:
      "bg-[linear-gradient(rgb(30,64,175),transparent,rgb(157,23,77))] dark:bg-[linear-gradient(rgb(147,197,253),transparent,rgb(249,168,212))]",
  },
  {
    name: "UX Unicórnio",
    institution: "por Leandro Rezende",
    description:
      "Formação em UI/UX Design do zero ao nível profissional de Design de Experiência do Usuário.",
    date: "04/2023",
    link: "https://uxunicornio.com.br/2023/",
    background: "bg-pink-800 dark:bg-pink-300",
    textColor: "text-pink-800 dark:text-pink-300",
    fillColor: "fill-pink-100 dark:fill-pink-900",
    lineGradiant:
      "bg-[linear-gradient(rgb(157,23,77),transparent,rgb(154,52,18))] dark:bg-[linear-gradient(rgb(249,168,212),transparent,rgb(253,186,116))]",
  },
  {
    name: "NestJS",
    institution: "por Ariel Weinberger",
    description: "Desenvolvimento moderno de backend com foco em NestJS.",
    date: "09/2021",
    link: "https://www.udemy.com/course/nestjs-zero-to-hero/",
    background: "bg-orange-800 dark:bg-orange-300",
    textColor: "text-orange-800 dark:text-orange-300",
    fillColor: "fill-orange-100 dark:fill-orange-900",
    lineGradiant:
      "bg-[linear-gradient(rgb(154,52,18),transparent,rgb(107,33,168))] dark:bg-[linear-gradient(rgb(253,186,116),transparent,rgb(216,180,254))]",
  },
  {
    name: "Formação em React Native",
    institution: "Rocketseat",
    description:
      "Curso completo de React Native. Utilizado diversas ferramentas importantes como TypeScript, Expo, Styled Components, Async Storage, Autenticação Social, Animações, Context API, Hooks, Jest e diversas outras.",
    date: "04/2021",
    link: "https://www.rocketseat.com.br/formacao/react-native",
    background: "bg-purple-800 dark:bg-purple-300",
    textColor: "text-purple-800 dark:text-purple-300",
    fillColor: "fill-purple-100 dark:fill-purple-900",
    lineGradiant:
      "bg-[linear-gradient(rgb(107,33,168),transparent,rgb(107,33,168))] dark:bg-[linear-gradient(rgb(216,180,254),transparent,rgb(216,180,254))]",
  },
  {
    name: "Formação em React",
    institution: "Rocketseat",
    description:
      "Curso completo de React.JS. Utilizado diversas ferramentas importantes como TypeScript, Next.JS, Styled Components, SASS, Context API, Hooks, Jest e diversas outras.",
    date: "04/2021",
    link: "https://www.rocketseat.com.br/formacao/react",
    background: "bg-purple-800 dark:bg-purple-300",
    textColor: "text-purple-800 dark:text-purple-300",
    fillColor: "fill-purple-100 dark:fill-purple-900",
    lineGradiant:
      "bg-[linear-gradient(rgb(107,33,168),transparent,rgb(107,33,168))] dark:bg-[linear-gradient(rgb(216,180,254),transparent,rgb(216,180,254))]",
  },
  {
    name: "Formação em Node",
    institution: "Rocketseat",
    description:
      "Curso completo de Node.JS. Utilizado diversas ferramentas importantes como TypeScript, Rest, SOLID, Docker, TypeORM, JWT, bcrypt, Jest e diversas outras.",
    date: "04/2021",
    link: "https://www.rocketseat.com.br/formacao/node",
    background: "bg-purple-800 dark:bg-purple-300",
    textColor: "text-purple-800 dark:text-purple-300",
    fillColor: "fill-purple-100 dark:fill-purple-900",
    lineGradiant:
      "bg-[linear-gradient(rgb(107,33,168),transparent,rgb(107,33,168))] dark:bg-[linear-gradient(rgb(216,180,254),transparent,rgb(216,180,254))]",
  },
  {
    name: "Bootcamp Full Stack",
    institution: "Rocketseat",
    description:
      "Bootcamp intensivo de 6 meses com foco em React.JS, React Native e Node.JS do zero ao deploy. Incluindo testes automatizados, integração contínua, publicação nas stores, e todas as biliotecas e frameworks importantes.",
    date: "10/2019",
    link: "https://www.rocketseat.com.br/",
    background: "bg-purple-800 dark:bg-purple-300",
    textColor: "text-purple-800 dark:text-purple-300",
    fillColor: "fill-purple-100 dark:fill-purple-900",
    lineGradiant: "",
  },
];

export function Content() {
  return (
    <Line>
      {courses.map((course, index) => (
        <Mark
          key={index}
          index={index}
          lastIndex={courses.length - 1}
          {...course}
        />
      ))}
    </Line>
  );
}
