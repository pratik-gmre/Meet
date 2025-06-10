'use client'
import { DataTable } from "@/components/ui/data-table"
import { useTRPC } from "@/trpc/client"
import { useQuery, useSuspenseQuery } from "@tanstack/react-query"
import { columns } from "../components/columns"
import { EmptyState } from "@/app/(dashboard)/agents/empty-state"

type Props = {
    meetingId:string
}

export const MeetingsView = ({meetingId}:Props)=>{
    const trpc = useTRPC()

    const {data} = useSuspenseQuery(trpc.meetings.getMany.queryOptions({}))
    return (
        <div className="flex-1 pb-4 md:px-8 flex flex-col gap-y-4">
            <DataTable data={data.items}  columns={columns} />
            {data.items.length === 0 && (
                    <EmptyState
                      title="Create your meeting"
                      description="Create a meeting to join meeting .Each meeting will follow a specific set of instructions and interact with participate during the meeting"
                    />
                  )}
        </div>
    )
}