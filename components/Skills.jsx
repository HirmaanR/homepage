import Card from "../components/Card";
import Bubble from "../components/Bubble";

import { DiGithubBadge, DiMsqlServer, DiJqueryLogo } from "react-icons/di";
import { IconContext } from "react-icons";
import {
  FaArrowRight,
  FaGitAlt,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3,
  FaNodeJs,
} from "react-icons/fa";
import { DiPython } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { SiDjango, SiMongodb, SiRedux, SiNeovim } from "react-icons/si";
import { AiOutlineDotNet } from "react-icons/ai";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  return (
    <div>
      <Bubble>
        <FaHtml5 className="text-xl" />
        Html
      </Bubble>
      <Bubble>
        <FaCss3 className="text-xl" />
        css
      </Bubble>
      <Bubble>
        <FaJs className="text-xl" />
        JavaScript
      </Bubble>
      <Bubble>
        <FaReact className="text-xl" />
        React
      </Bubble>
      <Bubble>
        <RiNextjsLine className="text-xl" />
        Next js
      </Bubble>
      <Bubble>
        <SiRedux className="text-xl" />
        Redux
      </Bubble>
      <Bubble>
        <DiPython className="text-xl" />
        Python
      </Bubble>
      <Bubble>
        <TbBrandCSharp className="text-xl" />
        Csharp
      </Bubble>
      <Bubble>
        <AiOutlineDotNet className="text-xl" />
        .Net
      </Bubble>
      <Bubble>
        <FaGitAlt className="text-xl" />
        git
      </Bubble>
      <Bubble>
        <SiDjango className="text-xl" />
        django
      </Bubble>
      <Bubble>
        <DiMsqlServer className="text-2xl" />
        Sql server
      </Bubble>
      <Bubble>
        <SiMongodb className="text-xl" />
        mongoDB
      </Bubble>
      <Bubble>
        <RiTailwindCssFill className="text-xl" />
        TailwindCss
      </Bubble>
      <Bubble>
        <DiJqueryLogo className="text-xl" />
        Jquery
      </Bubble>
      <Bubble>
        <FaNodeJs className="text-xl" />
        Node js
      </Bubble>
      <Bubble>
        <SiNeovim className="text-xl" />
        Neovim
      </Bubble>
      <Bubble>ASP.Net MVC</Bubble>
      <Bubble>SQL Server</Bubble>
    </div>
  );
};

const AditionalSkils = () => {
  return (
    <div>
      <Bubble>Object Oriented Programming (OOP)</Bubble>
      <Bubble>Design Patterns</Bubble>
      <Bubble>SOLID</Bubble>
      <Bubble>Clean Code</Bubble>
      <Bubble>Django Rest FrameWork (DRF)</Bubble>
      <Bubble>Rest API</Bubble>
      <Bubble>MVC Microservices</Bubble>
    </div>
  );
};

export { Skills, AditionalSkils };
