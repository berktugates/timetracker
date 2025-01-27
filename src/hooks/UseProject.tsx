import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { ITimelaneEvent } from "../models/ITimelineEvent";
import { ICompany } from "../models/ITracker";
import { message } from "antd";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

const UseProject = () => {
  const [projects, setProjects] = useState<ITimelaneEvent[]>([]);
  const [companies, setCompanies] = useState<ICompany[]>([]);
  const [newProject, setNewProject] = useState<ITimelaneEvent>({
    title: "",
    description: "",
    company_id: null,
    isfinished: false,
    time: 0,
    created_at: new Date().toISOString(),
  });
  const [isEdit, setIsEdit] = useState<any>(null);
  const [editedTitle,setEditedTitle] = useState<string>("");
  const [messageApi, contextHolder] = message.useMessage();

  const addMessage = () => {
    messageApi.open({
      type: "success",
      content: "Data added successfully",
    });
  };
  const delMessage = () => {
    messageApi.open({
      type: "error",
      content: "Data deleted successfully",
    });
  };

  const fetchProjects = async () => {
    try {
      const response = await supabase.from("project").select(
        `*, company:company_id(
        id,title
        )`
      );
      if (response.status === 200 && response.data) {
        setProjects(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addProjectHandler = async (tracker: number) => {
    try {
      const response = await supabase
        .from("project")
        .insert({ ...newProject, time: tracker })
        .select();

      if (response.data) {
        await fetchProjects();
        setNewProject({
          title: "",
          description: "",
          company_id: null,
          isfinished: false,
          time: 0,
          created_at: new Date().toISOString(),
        });
        addMessage();
      }
    } catch (err) {
      console.log(err);
      messageApi.error("Failed add to data.");
    }
  };

  const deleteProjectHandler = async (id: number) => {
    try {
      const response = await supabase.from("project").delete().eq("id", id);
      if (response.status === 200) {
        await fetchProjects();
        delMessage();
      }
    } catch (err) {
      console.log(err);
      messageApi.error("Failed delete to data.");
    }
  };

  const editProjectHandler = async(id:number, text:string)=>{
    try{
      const response = await supabase.from("project").update({title:text}).eq('id', id)
      if(response.status === 200){
        await fetchProjects();
        console.log("basariyla guncellendi");
      }
      setIsEdit(null);
    }
    catch(err){
      console.log(err);
    }
  }

  const fetchCompanies = async () => {
    try {
      const response = await supabase.from("company").select();
      if (response.status === 200 && response.data) {
        setCompanies(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const formatTime = (time: number): string => {
    let hrs = Math.floor(time / 3600);
    let min = Math.floor((time - hrs * 3600) / 60);
    let sec = Math.floor(time - (hrs * 3600 + min * 60));
    return `${hrs}:${min}:${sec}`;
  };
  return {
    fetchProjects,
    fetchCompanies,
    formatTime,
    projects,
    companies,
    addProjectHandler,
    newProject,
    setNewProject,
    deleteProjectHandler,
    editProjectHandler,
    contextHolder,
    isEdit,
    setIsEdit,
    editedTitle,
    setEditedTitle
  };
};
export default UseProject;
