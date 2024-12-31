import React, { useEffect } from "react";
import UseProject from "../hooks/UseProject";
import Sidebar from "../components/Sidebar";
import Tracker from "../components/Tracker";
import { Dot, EllipsisVertical } from "lucide-react";
import { Button, Popconfirm } from "antd";

const Home: React.FC = () => {
  const {
    fetchProjects,
    fetchCompanies,
    formatTime,
    projects,
    deleteProjectHandler,
    contextHolder,
  } = UseProject();
  
  useEffect(() => {
    fetchProjects();
    fetchCompanies();
  }, []);

  return (
    <>
      {contextHolder}
      <div id="root" className="flex h-screen">
        <Sidebar />
        <div id="context" className="bg-gray-100 w-full">
          <Tracker />
          <div id="timelane" className="p-4  xl:w-2/3">
            <div
              id="weekly-info "
              className="flex items-center justify-between gap-x-4"
            >
              <h1 className="font-medium text-sm">TIMELANE</h1>
              <div className="flex flex-col md:flex-row gap-x-4">
                <h1 className="text-xs text-gray-500">
                  TODAY:{" "}
                  <span className="text-gray-700 font-medium">3:29:00</span>
                </h1>
                <h1 className="text-xs text-gray-500">
                  WEEK TOTAL:{" "}
                  <span className="text-gray-700 font-medium">14:54:35</span>
                </h1>
              </div>
            </div>
            {projects.map((project) => (
              <>
                <div
                  id="card"
                  key={project.id}
                  className="bg-white p-2 mt-4 font-medium rounded-lg md:p-3"
                >
                  <h1 className="flex items-center justify-between text-sm">
                    {new Date(project.created_at).toLocaleDateString("tr-TR")}{" "}
                    <span>{formatTime(project.time)}</span>
                  </h1>
                  <div
                    id="card-info"
                    className="mt-2 p-2 flex flex-col items-center md:flex-row md:justify-between bg-gray-200 border border-gray-300 rounded-md"
                  >
                    <div>
                      <h1 className="text-sm opacity-85">{project.title}</h1>
                      <p className="text-[10px] text-gray-400">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-x-3">
                      <h1
                        className={`flex text-xs items-center ${
                          project.isfinished === true
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        <Dot />{" "}
                        {project.isfinished ? "Completed" : "Not Completed"}
                      </h1>
                      <h1 className="flex text-xs items-center">
                        {project.company?.title}
                      </h1>
                      <Popconfirm
                        title="Are you sure to delete this track?"
                        description="Delete the track."
                        okText="Yes"
                        cancelText="No"
                        onConfirm={async() => {
                            await deleteProjectHandler(project.id)
                        }}
                      >
                        <Button size="small">
                          <EllipsisVertical size={15} />
                        </Button>
                      </Popconfirm>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
