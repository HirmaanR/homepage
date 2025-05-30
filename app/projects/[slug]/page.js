import Link from "next/link";
import Image from "next/image";

import Tag from "../../../components/Tag";
import MotionSection from "../../../components/MotionSection";
import { data } from "../../data";

export async function generateMetadata({ params }) {
  return {
    title: "Projects Detail",
    description: "Hirmaan Rashidi Portfolio | Projects Detail",
  }
}

const Project = ({ params }) => {
  let prj = data[params.slug - 1];

  return (
    <div className="grid justify-center">
      <MotionSection>
        <div className="m-22"></div>
        <div className="breadcrumbs text-sm m-2">
          <ul>
            <li>
              <Link href="/projects" className="text-sm">
                Projects
              </Link>
            </li>
            <li className="text-lg lg:text-xl">
              {prj.name} <Tag title={prj.date} />
            </li>
          </ul>
        </div>
        <div className="flex flex-row items-center m-2">
          <h1 className="font-bold text-2xl capitalize lg:text-4xl">
            {prj.name}
          </h1>
        </div>
        <p className="m-2 text-sm max-w-96">{prj.des}</p>
        <div className="divider"></div>
        <div>
          <Tag
            title="Github Link"
            des={
              <a href={prj.github} className="text-blue-400 underline">
                {prj.github}
              </a>
            }
          />
          <Tag title="platforms" des={prj.platform.join(" / ")} />
          <Tag title="stack" des={prj.stacks.join(" / ")} />
        </div>
        <div className="divider"></div>
        <div className="grid grid-cols-1 place-items-center gap-4 lg:gap-y-4 justify-around lg:grid-cols-2">
          {prj.img.map((image, index) => {
            return (
              <Image
                key={index}
                src={image}
                width={400}
                height={400}
                alt="project picture"
                className="rounded-lg m-3 cursor-pointer"
              />
            );
          })}
        </div>
      </MotionSection>
    </div>
  );
};
export default Project;
