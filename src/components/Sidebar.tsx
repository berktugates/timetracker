import React, { useState } from "react";
import {
  Activity,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  ChevronFirst,
  ChevronLast,
  ClipboardMinus,
  Clock,
  LogOut,
  ReceiptText,
  Rocket,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
    const navigation = useNavigate();
  return (
    <>
      <div
        id="sidebar"
        className={`border-r py-2 ${
          isOpen ? "w-56 lg:w-64 px-4 " : "w-24 px-0"
        } transition-all duration-300 flex flex-col justify-between`}
      >
        <div id="sidebar-1">
          <div
            id="brand"
            className={`${
              isOpen ? "justify-between items-center" : "justify-center items-center"
            } flex  gap-x-2 mt-2`}
          >
            {isOpen ? (
              <>
                <img
                  src="https://img.logoipsum.com/244.svg"
                  alt=""
                  className="w-15"
                />
                <ChevronFirst size={30} onClick={() => setIsOpen(false)} />
              </>
            ) : (
              <>
                <ChevronLast size={30} className="mt-4" onClick={() => setIsOpen(true)} />
              </>
            )}
          </div>

          <div id="options" className="mt-8">
            <div id="timer-options" className="mb-8">
              <h1
                className={`text-gray-400 font-medium mb-4 ${
                  isOpen ? "text-base" : "text-sm text-center"
                }`}
              >
                TIMER
              </h1>
              {isOpen ? (
                <>
                  <h1 onClick={()=> navigation("/home")} className="flex items-center gap-x-2  text-nowrap mb-6 hover:cursor-pointer hover:bg-[#ebf1ff]  ">
                    <Clock size={20} /> Track Time
                  </h1>
                </>
              ) : (
                <>
                  <h1 onClick={()=> navigation("/home")} className="flex items-center justify-center gap-x-2 hover:cursor-pointer hover:bg-[#ebf1ff]  ">
                    <Clock size={20}  />
                  </h1>
                </>
              )}
            </div>

            <div id="analyze-options" className="mb-8">
              <h1
                className={`text-gray-400 font-medium mb-4 ${
                  isOpen ? "text-base" : "text-sm text-center"
                }`}
              >
                ANALYZE
              </h1>
              {isOpen ? (
                <>
                  <h1 className="flex items-center text-center gap-x-2 mb-6">
                    <Activity /> Activity
                  </h1>
                  <h1 className="flex items-center gap-x-2 mb-6">
                    <ClipboardMinus /> Reports
                  </h1>
                  <h1 className="flex items-center gap-x-2 mb-6">
                    <ChartNoAxesCombined /> Analytics
                  </h1>
                  <h1 className="flex items-center gap-x-2 mb-6">
                    <Rocket /> Insights
                  </h1>
                </>
              ) : (
                <>
                  <h1 className="flex items-center justify-center gap-x-2 mb-6 hover:bg-[#ebf1ff]  ">
                    <Activity size={20}/>
                  </h1>
                  <h1 className="flex items-center justify-center gap-x-2 mb-6 hover:bg-[#ebf1ff]  ">
                    <ClipboardMinus size={20} />
                  </h1>
                  <h1 className="flex items-center justify-center gap-x-2 mb-6 hover:bg-[#ebf1ff]  ">
                    <ChartNoAxesCombined size={20}  />
                  </h1>
                  <h1 className="flex items-center justify-center gap-x-2 mb-6 hover:bg-[#ebf1ff]  ">
                    <Rocket size={20} />
                  </h1>
                </>
              )}
            </div>
            <div id="manage-options">
              <h1
                className={`text-gray-400 font-medium mb-4 ${
                  isOpen ? "text-base" : "text-sm text-center"
                }`}
              >
                MANAGE
              </h1>
              {isOpen ? (
                <>
                  <h1 className="flex items-center gap-x-2 mb-6">
                    <BriefcaseBusiness /> Projects
                  </h1>
                  <h1 className="flex items-center gap-x-2 mb-6">
                    <Users /> Team
                  </h1>
                  <h1 className="flex items-center gap-x-2 mb-6">
                    <ReceiptText /> Invoices
                  </h1>
                  <h1 className="flex items-center gap-x-2 mb-6">
                    <Rocket /> Insights
                  </h1>
                </>
              ) : (
                <>
                  <h1 className="flex items-center justify-center gap-x-2 mb-6 hover:bg-[#ebf1ff]  ">
                    <BriefcaseBusiness size={20} />
                  </h1>
                  <h1 className="flex items-center justify-center gap-x-2 mb-6 hover:bg-[#ebf1ff]  ">
                    <Users size={20} />
                  </h1>
                  <h1 className="flex items-center justify-center gap-x-2 mb-6 hover:bg-[#ebf1ff]  ">
                    <ReceiptText size={20}  />
                  </h1>
                  <h1 className="flex items-center justify-center gap-x-2 mb-6 hover:bg-[#ebf1ff]  ">
                    <Rocket size={20} />
                  </h1>
                </>
              )}
            </div>
          </div>
        </div>
        <div id="sidebar-2">
          {isOpen ? (
            <>
              <h1 className="flex items-center gap-x-2 mb-6 text-red-500">
                <LogOut /> Log Out
              </h1>
            </>
          ) : (
            <>
              <h1 className="flex items-center justify-center gap-x-2 mb-6 text-red-500 hover:scale-125 hover:duration-300">
                <LogOut size={20} />
              </h1>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
