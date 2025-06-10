import { ResponsiveDialog } from "@/components/responsive-dialog";
import { AgentForm } from "./agent-form";

type Props = {
    open: boolean;
    OnOpenChange: (open: boolean) => void;
};


export const NewAgentDialog = ({open,OnOpenChange}:Props)=>{
    return( 
                <ResponsiveDialog title="New Agent" description="Create a new agent" open={open}   onOpenChange={OnOpenChange}>
                        <AgentForm onSuccess={()=>OnOpenChange(false)} onCancel={()=>OnOpenChange(false)}/>
                </ResponsiveDialog>
    )
}