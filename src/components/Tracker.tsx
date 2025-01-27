import React, { useEffect } from "react";
import UseProject from "../hooks/UseProject";
import UseTracker from "../hooks/UseTracker";
import { BriefcaseBusiness, Check, Pause, Play, Tag } from "lucide-react";
import { Button, Cascader, Input } from "antd";
import {
  ICompanyOptions,
  ITimelaneEventFinishedOptions,
} from "../models/ITracker";

const Tracker: React.FC = () => {
  const {
    formatTime,
    companies,
    fetchCompanies,
    newProject,
    setNewProject,
    addProjectHandler,
  } = UseProject();

  const { trackerStartHandler, trackResetHandler, isRunning, tracker } =
    UseTracker();

  useEffect(() => {
    fetchCompanies();
  }, []);

  const isFinishedOptions: ITimelaneEventFinishedOptions[] = [
    {
      label: "Not Completed",
      value: false,
    },
    {
      label: "Completed",
      value: true,
    },
  ];

  const companyOptions: ICompanyOptions[] = companies.map((company) => ({
    label: company.title,
    value: company.id,
  }));

  return (
    <>
      <div
        id="tracker"
        className="bg-white flex flex-col md:flex-row md:justify-between xl:w-2/3"
      >
        <Input
          className="h-16 border-0 rounded-none placeholder:font-semibold placeholder:text-gray-400"
          placeholder="What are you working on? | This is the demo project."
          value={newProject?.title}
          onChange={(e) =>
            setNewProject({ ...newProject, title: e.target.value })
          }
        />
        <div
          id="tracker-options"
          className="w-full flex justify-center items-center p-2 gap-x-4 md:gap-x-3 md:me-3 md:justify-end "
        >
          <Cascader
            options={companyOptions}
            onChange={(value) =>
              setNewProject({ ...newProject, company_id: value?.[0] as number })
            }
          >
            <BriefcaseBusiness />
          </Cascader>
          <Cascader
            options={isFinishedOptions}
            onChange={(value) =>
              setNewProject({
                ...newProject,
                isfinished: value?.[0] as boolean,
              })
            }
          >
            <Tag />
          </Cascader>
          <h1 className="text-gray-400">{formatTime(tracker)}</h1>
          {isRunning ? (
            <>
              <div className="flex flex-col gap-y-2 md:flex-row md:gap-x-2 md:gap-y-0">
                <Button onClick={() => trackerStartHandler()}>
                  <Pause /> Pause
                </Button>
                <Button
                  onClick={async () => {
                    await addProjectHandler(tracker);
                    trackResetHandler();
                  }}
                >
                  <Check /> Finish
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="flex gap-x-2">
                <Button onClick={() => trackerStartHandler()}>
                  <Play size={20} /> Start
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Tracker;
