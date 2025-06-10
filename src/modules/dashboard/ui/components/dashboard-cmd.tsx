import {  CommandInput, CommandItem, CommandList, CommandResponsiveDialog } from "@/components/ui/command";
import { Dispatch, SetStateAction } from "react";


type Props = {
    open:boolean 
    setOpen : Dispatch<SetStateAction<boolean>>
}
export const DashboardCmd = ({open,setOpen}:Props) => {
    return (
       <CommandResponsiveDialog open={open} onOpenChange={setOpen}>
        <CommandInput 
        placeholder="Find a meeting or agent"

        />
        <CommandList>
            <CommandItem>
                Test
            </CommandItem>
        </CommandList>
       </CommandResponsiveDialog>
    );
};