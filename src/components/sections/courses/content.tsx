import { Line, Mark } from "./timeline";

export interface CourseProps {
  link: string;
  background: string;
  textColor: string;
  fillColor: string;
  code: string;
}

const courses: CourseProps[] = [
  {
    link: "https://balta.io",
    background: "bg-blue-800 dark:bg-blue-300",
    textColor: "text-blue-800 dark:text-blue-300",
    fillColor: "fill-blue-100 dark:fill-blue-900",
    code: "netDeveloperCareer",
  },
  {
    link: "https://uxunicornio.com.br/2023/",
    background: "bg-pink-800 dark:bg-pink-300",
    textColor: "text-pink-800 dark:text-pink-300",
    fillColor: "fill-pink-100 dark:fill-pink-900",
    code: "uxUnicorn",
  },
  {
    link: "https://www.udemy.com/course/nestjs-zero-to-hero/",
    background: "bg-orange-800 dark:bg-orange-300",
    textColor: "text-orange-800 dark:text-orange-300",
    fillColor: "fill-orange-100 dark:fill-orange-900",
    code: "nestjs",
  },
  {
    link: "https://www.rocketseat.com.br/formacao/react-native",
    background: "bg-purple-800 dark:bg-purple-300",
    textColor: "text-purple-800 dark:text-purple-300",
    fillColor: "fill-purple-100 dark:fill-purple-900",
    code: "formationInReactNative",
  },
  {
    link: "https://www.rocketseat.com.br/formacao/react",
    background: "bg-purple-800 dark:bg-purple-300",
    textColor: "text-purple-800 dark:text-purple-300",
    fillColor: "fill-purple-100 dark:fill-purple-900",
    code: "formationInReact",
  },
  {
    link: "https://www.rocketseat.com.br/formacao/node",
    background: "bg-purple-800 dark:bg-purple-300",
    textColor: "text-purple-800 dark:text-purple-300",
    fillColor: "fill-purple-100 dark:fill-purple-900",
    code: "formationInNode",
  },
  {
    link: "https://www.rocketseat.com.br/",
    background: "bg-purple-800 dark:bg-purple-300",
    textColor: "text-purple-800 dark:text-purple-300",
    fillColor: "fill-purple-100 dark:fill-purple-900",
    code: "fullStackBootcamp",
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
