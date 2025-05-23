import React from "react";
import ProjectCard from "../Components/ProjectCard";

const projects = [
  {
    title: "Media AI",
    status: "In Progress",
    progress: 60,
    image: "https://source.unsplash.com/300x300/?office,ai",
  },
  {
    title: "Green Loop",
    status: "Delayed",
    progress: 35,
    image: "https://source.unsplash.com/300x300/?charts,laptop",
  },
  {
    title: "Vibrance",
    status: "At Risk",
    progress: 33,
    image: "https://source.unsplash.com/300x300/?coding,developer",
  },
];

const ProjectsSection = () => {
  return (
    <div className="flex gap-12 justify-between">
      {projects.map((proj, idx) => (
        <ProjectCard key={idx} {...proj} />
      ))}
    </div>
  );
};

export default ProjectsSection;