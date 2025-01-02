import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "Workflow",
    title: "Workflowhr",
    description:
      "Workflow HR is a comprehensive Human Resource Management System (HRMS) developed by Workforce Africa to streamline and optimize HR processes within organizations. ",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    githubUrl:"#",
    url: "https://develop.my.workflowhr.app/",
    tags: ["Nextjs", "NestJs", "Docker", "Turbo", "Radix UI", "socket .io", "Node", "TypeScript", "Supabase", "DigitalOcean"],
  },
  {
    id: "Pundispace",
    title: "Punditspace",
    description:
      "PunditSpace is a dynamic tech platform designed to connect job seekers with employers, fostering seamless interaction between talent and opportunity.",
    icon: "/skills/vue.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.Personal,
    githubUrl: "#",
    url: "https://punditspace.io/",
    tags: ["PHP", "CSS3", "Sass", "PostgreSql", "Blade","VueJs"],
  },
  {
    id: "Workforce Africa",
    title: "Workforce Africa Webpage",
    description:
      "It serves as the digital front for one of the leading HR and staffing solutions providers in Africa. It offers insights into the company's services, expertise, and solutions while connecting businesses with the talent they need to succeed.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Private,
    projectType: ProjectType.JobWork,
    githubUrl: "#",
    url: "https://workforceafrica.co/",
    tags: ["Nextjs", "Docker",  "Radix UI","Tailwind css","TypeScript", "Digital Ocean", "NestJs", "NodeJs"],
  },

 { id: "Job Portal",
  title: "Workforce Africa Job Portal",
  description:
    "The Workforce Africa Job Portal is primarily an internal tool for Workforce Africa to post job vacancies and manage applications. It simplifies the recruitment process by enabling Workforce Africa to efficiently add and manage job listings.",
  icon: "/skills/nextjs.png",
  repoType: RepoType.Private,
  projectType: ProjectType.JobWork,
  githubUrl: "#",
  url: "https://my.workforceafrica.co/",
  tags: ["Nextjs", "Docker", "Nestjs", "Radix UI","Tailwind CSS","TypeScript","Digital Ocean"],
},
];
export default projects;
