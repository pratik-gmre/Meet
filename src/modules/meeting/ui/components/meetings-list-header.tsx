"use client";

import { Button } from "@/components/ui/button";
import { PlusIcon, X, XCircleIcon } from "lucide-react";



import { NewMeetingDialog } from "./new-meetings-dialog";
import { useState } from "react";

export const MeetingsListHeader = () => {
  const [isDialogOpen, setDialogOpen] = useState(false)
 

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
      <div className="flex items-center gap-x-2 p-1">
        
      </div>
    </div>
    </>
  );
};


