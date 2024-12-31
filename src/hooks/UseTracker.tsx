import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { ITimelaneEvent } from "../models/ITimelineEvent";
import { ICompany } from "../models/ITracker";

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_KEY
);

const UseTracker = ()=>{
    const [tracker, setTracker] = useState<number>(0);
    const [projects, setProjects] = useState<ITimelaneEvent[]>([]);
    const [companies, setCompanies] = useState<ICompany[]>([]);
    const [newProject, setNewProject] = useState<ITimelaneEvent>({
        title: "",
        description: "",
        company_id: null,
        isfinished: false,
        time: 0,
        created_at: new Date().toISOString()
      });

    

    const fetchProjects = async () => {
        try {
          const response = await supabase.from("project").select();
          if (response.status === 200 && response.data) {
            setProjects(response.data);
          }
        } catch (err) {
          console.log(err);
        }
      };

      const addProjectHandler = async()=>{
        try{
            const response = await supabase.from("project").insert({...newProject, time:tracker});
            if(response.status === 200 && response.data){
                console.log("project ekleme başarılı");
            }
            setNewProject({
                title: "",
                description: "",
                company_id: null,
                isfinished: false,
                time: 0,
                created_at: new Date().toISOString()
              });
              fetchProjects();
        }
        catch(err){
            console.log(err);
        }
      }

      const deleteProjectHandler = async(id:number)=>{
        try{

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
        tracker,
        setTracker,
        projects,
        companies,
        addProjectHandler,
        newProject,
        setNewProject,
        deleteProjectHandler
    }
}
export default UseTracker;