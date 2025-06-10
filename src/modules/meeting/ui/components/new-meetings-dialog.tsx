import { ResponsiveDialog } from "@/components/responsive-dialog";
import { useRouter } from "next/navigation";
import { MeetingForm } from "./meeting-form";

type Props = {
  open: boolean;
  OnOpenChange: (open: boolean) => void;
};

export const NewMeetingDialog = ({ open, OnOpenChange }: Props) => {
    const router= useRouter()

  return (
    <ResponsiveDialog
      title="New Meeting"
      description="Create a new meeting"
      open={open}
      onOpenChange={OnOpenChange}
    >
      <MeetingForm
      onSuccess={(id)=>{
        OnOpenChange(false)
        router.push(`/meetings/${id}`)
      }}
      onCancel={()=>OnOpenChange(false)}
      
      />
    </ResponsiveDialog>
  );
};
