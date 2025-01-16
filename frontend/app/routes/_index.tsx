import type { MetaFunction } from "@remix-run/node";
import DotPattern from "../components/DotPattern";
import WeekPlannerProvider from "../components/providers/WeekPlannerProvider";
import Week from "../components/Week";
import { content } from "../consts";
import { useGlobal } from "../hooks/useGlobal";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const { language } = useGlobal()
  const { mainTitle } = content
  return (
    <WeekPlannerProvider>
      <div className="font-figtree text-sm max-w-[1300px] lg:mx-auto p-5 pt-14 flex flex-col gap-10 relative">
        <div className="text-center flex flex-col gap-5 max-w-[750px] mx-auto z-10">
          <h1 className=" text-7xl font-pacifico">
            {mainTitle[language]}
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatum esse ducimus corporis a magnam non aut ipsam rerum magni amet cumque consequuntur obcaecati facilis sed, architecto aliquid eius culpa.</p>
        </div>
        <Week />
        <DotPattern />
      </div>
    </WeekPlannerProvider>
  );
}
