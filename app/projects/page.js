import ListItem from "../../components/ListItem";
import MotionSection from "../../components/MotionSection";
import { data } from "../data";

export async function generateMetadata({ params }) {
  return {
    title: "Projects",
    description: "Hirmaan Rashidi Portfolio | Projects",
  };
}

const Projects = () => {
  let items = data.map((item) => {
    return (
      <ListItem
        key={item.id}
        id={item.id}
        title={item.name}
        des={item.des}
        img={item.img.at(0)}
      />
    );
  });
  return (
    <div className="grid justify-center">
      <MotionSection>
        <div className="m-22"></div>
        <h1 className="capitalize grid font-bold text-3xl underline text-primary my-4 justify-center md:justify-start">
          projects
        </h1>
        <div className="grid grid-cols-1 place-items-center gap-4 sm:gap-y-4 justify-around md:grid-cols-2 items-stretch">
          {items}
        </div>
      </MotionSection>
    </div>
  );
};
export default Projects;
