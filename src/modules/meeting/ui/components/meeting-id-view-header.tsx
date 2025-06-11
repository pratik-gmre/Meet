import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button";


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import { ChevronRightIcon, MoreVerticalIcon, PencilIcon, TrashIcon } from "lucide-react";
import Link from "next/link";

type Props = {
    meetingId: string;
    meetingName: string;
    onEdit: () => void;
    onRemove: () => void;
}


export const MeetingIdViewHeader = ({meetingId, meetingName, onEdit, onRemove}: Props) => {
    return (
        <div className="flex items-center justify-between">
            <Breadcrumb>
            <BreadcrumbList>
            <BreadcrumbItem>
            <BreadcrumbLink asChild className="font-medium text-xl">
            <Link href={`/agents`}><span className="text-sm text-muted-foreground">My meeting</span></Link></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
            <ChevronRightIcon className="text-foreground text-xl font-medium [&>svg]:size-4"/>
            </BreadcrumbSeparator>

             <BreadcrumbItem>
            <BreadcrumbLink asChild className="font-medium text-xl text-foreground">
            <Link href={`/meetings/${meetingId}`}>{<span className="text-sm text-muted-foreground">{meetingName}</span>}</Link></BreadcrumbLink>
            </BreadcrumbItem>

            </BreadcrumbList>
            </Breadcrumb>

            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost">
                        <MoreVerticalIcon/>

                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={onEdit}>
                        <PencilIcon className="size-4 text-black"/>
                        Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={onRemove}>
                        <TrashIcon className="size-4 text-black"/>
                    Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>


        </div>
    )
}