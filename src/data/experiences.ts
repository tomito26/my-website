import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Fullstack Developer",
    company: "Workforce Africa",
    startDate: "Aug 2023",
    isCurrentJob: true,
    location: "Nairobi, Kenya",
    description: [
      "Contributed to the development of a comprehensive HR management system designed to streamline employee performance management, attendance tracking, and payroll processing.",
      "I maintained and enhanced the company's existing systems, including improving functionality and optimizing performance for their websites, ensuring smooth operation and scalability for their job portal",
      "Supported and maintained the tech platform dedicated to posting technology-related jobs.",
      "Worked closely with cross-functional teams to deliver scalable and efficient solutions, focusing on enhancing user experience and system reliability.",
    ],
  },
  {
    designation: "Full Stack Developer",
    company: "Italanta-Elewa",
    startDate: "March 2022",
    endDate: "August 2023",
    isCurrentJob: false,
    location: "Nairobi, Kenya",
    description: [
      "Contributed to the development of the ELEWA Conversational Learning Manager, an AI-driven educational platform designed to enhance interactive learning through conversational interfaces.",
      "Implemented key features across the stack, utilizing technologies like Angular to deliver efficient, user-friendly applications.",
      "Assisted in testing and debugging to enhance application performance and user experience.",
      "I collaborated with a distributed team to implement scalable and user-friendly features using Angular and Node.js",
    ],
  },
  {
    designation: "Full Stack Development Intern",
    company: "Oaknet",
    startDate: "May 2021",
    endDate: "Jul 2022",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Designed, developed, and deployed a scalable field service software to manage and streamline field operations.",
      "Ensured the software was up to date with industry standards and technology best practices.",
      "Integrated APIs and databases to ensure efficient data exchange between field agents and the system.",
      "Provided ongoing maintenance, troubleshooting, and bug fixes for the existing application.",
    ],
  },
];

export default experiences;
