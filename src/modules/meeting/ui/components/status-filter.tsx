import { CircleCheckIcon, CircleIcon, ClockArrowUp, LoaderIcon, VideoIcon } from "lucide-react";
import { MeetingStatus } from "../../types";
import { useMeetingFilters } from "../../hooks/use-meetings-filters";
import { CommandSelect } from "@/components/command-select";




const options = [
    {
        id:MeetingStatus.Upcoming,
        value:MeetingStatus.Upcoming,
        children:(
            <div className="flex items-center gap-x-2 capitalize"><ClockArrowUp/>
            {MeetingStatus.Upcoming}
            </div>
        )
        
    },
     {
        id:MeetingStatus.Completed,
        value:MeetingStatus.Completed,
        children:(
            <div className="flex items-center gap-x-2 capitalize"><CircleCheckIcon/>
            {MeetingStatus.Completed}
            </div>
        )
        
    }, {
        id:MeetingStatus.Active,
        value:MeetingStatus.Active,
        children:(
            <div className="flex items-center gap-x-2 capitalize"><VideoIcon/>
            {MeetingStatus.Active}
            </div>
        )
        
    }, {
        id:MeetingStatus.Processing,
        value:MeetingStatus.Processing,
        children:(
            <div className="flex items-center gap-x-2 capitalize"><LoaderIcon/>
            {MeetingStatus.Processing}
            </div>
        )
        
    },
    {
        id:MeetingStatus.Cancelled,
        value:MeetingStatus.Cancelled,
        children:(
            <div className="flex items-center gap-x-2 capitalize"><CircleIcon/>
            {MeetingStatus.Cancelled}
            </div>
        )
        
    },
     

]


export const StatusFilter  = ()=>{
    const [filter, setFilters] = useMeetingFilters()
    return(
        <CommandSelect 
        placeholder="Status"
        options={options}
        value={filter.status ?? ""}
        onSelect={(value)=>{
            setFilters({status:value as MeetingStatus})
        }}
        className="h-9 border-none bg-transparent"
        />
    )
}