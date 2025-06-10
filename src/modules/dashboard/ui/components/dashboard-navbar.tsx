"use client";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { PanelLeftIcon, SearchIcon } from "lucide-react";
import { DashboardCmd } from "./dashboard-cmd";
import { useEffect, useState } from "react";

export const DashboardNavbar = () => {
  const { state, toggleSidebar, isMobile } = useSidebar();

  const [commmandOpen , setCommandOpen]  = useState(false)



  useEffect(()=>{
    const down = (e:KeyboardEvent)=>{
        if(e.key === "k" && (e.metaKey || e.ctrlKey)){
            e.preventDefault()
            setCommandOpen((open)=>!open)
        }
    }
    document.addEventListener("keydown",down)
    return ()=> document.removeEventListener("keydown",down)
  },[])
  return (
    <>
    <DashboardCmd open={commmandOpen} setOpen={setCommandOpen}/>
    <nav className="flex px-4 gap-x-2  items-center  border-b py-3 ">
      <Button
        className="size-9 bg-white hover:bg-white"
        onClick={toggleSidebar}
      >
        {state === "collapsed" ? (
          <PanelLeftIcon color="black" />
        ) : (
          <PanelLeftIcon className="rotate-180  " color="black" />
        )}
      </Button>
      <Button
        variant={"outline"}
        size={"sm"}
        className="h-9 w-[240px] justify-start text-muted-foreground hover:bg-transparent font-normal "
        onClick={()=>setCommandOpen((open)=>!open)}
      >
        <SearchIcon />
        Search
        <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
          <span className="text-xs ">&#8984; </span>K
        </kbd>
      </Button>
    </nav>
    </>
  );
};
