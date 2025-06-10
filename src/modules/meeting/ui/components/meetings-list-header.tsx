"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon, X, XCircleIcon } from "lucide-react";



import { NewMeetingDialog } from "./new-meetings-dialog";
import { useState } from "react";
import MeetingsSearchFilter from "./meetings-search-filter";
import { StatusFilter } from "./status-filter";
import { AgentIdFilter } from "./agent-id-filter";
import { useMeetingFilters } from "../../hooks/use-meetings-filters";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { DEFAULT_PAGE } from "@/constants";

export const MeetingsListHeader = () => {
  const [isDialogOpen, setDialogOpen] = useState(false)
  const [filter,setFilter] = useMeetingFilters()

  const isAnyFilterModified = !!filter.status || !!filter.search || !!filter.agentId


  const onClearFilters = ()=>{
    setFilter({
      status:null,
      agentId:"",
      search:'',
      page:DEFAULT_PAGE
    })
  }
 

  return (
    <>
  <NewMeetingDialog open={isDialogOpen} OnOpenChange={setDialogOpen}/>
    <div className="py-4 px-4 flex flex-col gap-y-4">
      <div className="flex items-center justify-between">
        <h5 className="font-medium text-lg">My Meetings</h5>

        <Button onClick={()=>setDialogOpen(true)} className="cursor-pointer ">
          <PlusIcon />
          New Meeting
        </Button>
      </div>
      <ScrollArea>
      <div className="flex items-center gap-x-2 p-1">
        <MeetingsSearchFilter/>
        <StatusFilter />
        <AgentIdFilter/>
        { isAnyFilterModified && (
          <Button variant={"outline"} onClick={onClearFilters}>
            <XCircleIcon className="size-4"/>
          </Button>
        )}
      </div>
      <ScrollBar orientation="horizontal"/>
      </ScrollArea>
    </div>
    </>
  );
};


