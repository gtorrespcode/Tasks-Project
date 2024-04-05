import React from "react";
import Button from "./Button";

const Sidebar = ({
  onStartAddProject,
  onSelectProject,
  projects,
  selectedProjectId,
}) => {
  return (
    <aside className=" w-1/3 px-8 py-16 bg-green-900 text-green-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-green-200 ">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Projects</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-green-200 hover:bg-green-800";

          if (project.id === selectedProjectId) {
            cssClasses += " bg-green-800 text-green-200";
          } else {
            cssClasses += " text-green-400";
          }

          return (
            <li key={project.id}>
              <button className={cssClasses} 
              onClick={() => onSelectProject(project.id)}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
