'use client'
import { useTRPC } from "@/trpc/client"
import { useQuery, useSuspenseQuery } from "@tanstack/react-query"

type Props = {
    meetingId:string
}

export const MeetingsView = ({meetingId}:Props)=>{
    const trpc = useTRPC()

    const {data} = useSuspenseQuery(trpc.meetings.getMany.queryOptions({}))
    return (
        <div className="">
            {JSON.stringify(data?.items)}
        </div>
    )
}