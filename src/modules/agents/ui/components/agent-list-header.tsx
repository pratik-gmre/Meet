"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon, X, XCircleIcon } from "lucide-react";
import { NewAgentDialog } from "./new-agent-dialog";
import { useState } from "react";
import { useAgentFilters } from "../../hooks/use-agents-filters";
import AgentSearchFilter from "./agent-search-filter";
import { DEFAULT_PAGE } from "@/constants";

export const AgentListHeader = () => {
  const [filters ,setFilters] = useAgentFilters()

    const [isDialogOpen ,setIsDialogOpen] = useState<boolean>(false)

    const isAnyFilterModified = !!filters.search;

    const onClearFilters = ()=>{
      setFilters({
        search:"",
        page:DEFAULT_PAGE
      })
    }


  return (
    <>
    <NewAgentDialog open={isDialogOpen} OnOpenChange={setIsDialogOpen} />
    <div className="py-4 px-4 flex flex-col gap-y-4">
      <div className="flex items-center justify-between">
        <h5 className="font-medium text-lg">My Agent</h5>

        <Button onClick={()=>setIsDialogOpen(true)} className="cursor-pointer ">
          <PlusIcon />
          New Agent
        </Button>
      </div>
      <div className="flex items-center gap-x-2 p-1">
        <AgentSearchFilter/>
        {isAnyFilterModified && (
          <Button onClick={onClearFilters} variant={'outline'} size={"sm"}>
            <XCircleIcon />
            Clear
          </Button>
        )}
      </div>
    </div>
    </>
  );
};


