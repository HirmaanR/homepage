import Card from "../components/Card";
import Avatar from "../components/Avatar";
import Bubble from "../components/Bubble";
import { Skills, AditionalSkils } from "../components/Skills";
import MotionSection from "../components/MotionSection";

import Link from "next/link";

import { FaArrowRight } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <div>
      <MotionSection>
        <div className="m-22"></div>
        <Avatar />
        <div className="grid justify-center">
          <Card
            title="bio"
            des="I am a full-stack developer, my focus is on implementing customers' ideas into seamless products to their satisfaction."
          >
            <Link
              href="/projects"
              className="btn btn-secondary capitalize w-fit rounded-lg"
            >
              my projects
              <FaArrowRight />
            </Link>
          </Card>
          <Card title="skills">
            <Skills />
          </Card>
          <Card title={"Additional Skills"}>
            <AditionalSkils />
          </Card>
          <Card
            title="I LOVE"
            des="Neture, Cosmoc, Robots, Lerning, volleyball"
          />
          <Card title="on the web">
            <div>
              <Bubble title="HirmaanR" url="https://github.com/HirmaanR">
                <DiGithubBadge className="text-2xl" />
              </Bubble>
              <Bubble title="HirmaanR" url="https://x.com/HirmaanR">
                <FaXTwitter className="text-lg" />
              </Bubble>
            </div>
          </Card>
        </div>
      </MotionSection>
    </div>
  );
}
