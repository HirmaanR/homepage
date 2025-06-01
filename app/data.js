// image
import duckumentsCover from "@/public/assets/img/duckuments-cover.jpg";
import duckumentsLogin from "@/public/assets/img/duckumentsLogin.jpg";
import duckumentsSignup from "@/public/assets/img/duckumentsSignup.jpg";
import duckumentsDashbord from "@/public/assets/img/duckumentsDashbord.jpg";

import frutin from "../public/assets/img/frutin.png";
import udo from "../public/assets/img/u-do.jpg";

const data = [
  {
    id: 1,
    name: "duckuments",
    des: "AI Assistant for Generate Modular Code Documentation",
    img: [
      duckumentsCover,
      duckumentsLogin,
      duckumentsSignup,
      duckumentsDashbord,
    ],
    stacks: [
      "Python",
      "django",
      "django rest frameWork(DRF)",
      "React",
      "Nextjs",
    ],
    platform: ["webApplication", "AI Assistance"],
    github: "https://github.com/HirmaanR/duckuments",
    date: "2025",
    slug: "duckuments",
  },
  {
    id: 2,
    name: "U-do",
    des: "u-do is a simple project and task management dashboard designed to help freelancers and teams organize their projects efficiently. The platform enables project owners to manage tasks, assign members, track progress, and communicate effectively.",
    img: [udo],
    stacks: ["Python", "django", "dajngo rest frameWork(DRF)"],
    platform: ["webApplication"],
    github: "https://github.com/HirmaanR/u-do",
    date: "2024",
    slug: "u-do",
  },
  {
    id: 3,
    name: "frutin",
    des: "This site is an online store for fresh fruits and vegetables that aims to simplify the process of purchasing daily food products for users. Using this platform, customers can choose the fruits and vegetables they need from a diverse collection without having to leave their home and have them delivered to their doorstep in the shortest possible time.",
    img: [frutin],
    stacks: ["C#", "asp.net mvc", "sql server"],
    platform: ["webApplication"],
    github: "https://github.com/HirmaanR/Frutin",
    date: "2023",
    slug: "frutin",
  },
];

const GetProjectBySlug = (slug) => {
  return data.find((project) => project.slug === slug);
};

export { data, GetProjectBySlug };
