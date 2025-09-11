import { ResponsiveDialog } from "@/components/responsive-dialog";
import { useRouter } from "next/navigation";
import { MeetingForm } from "./meeting-form";
import { MeetingGetOne } from "../../types";

type Props = {
  open: boolean;
  OnOpenChange: (open: boolean) => void;
  initalValue: MeetingGetOne;
};

export const UpdateMeetingDialog = ({
  open,
  OnOpenChange,
  initalValue,
}: Props) => {


  return (
    <ResponsiveDialog
      title="Edit Meeting"
      description="Edit meeting details"
      open={open}
      onOpenChange={OnOpenChange}
    >
      <MeetingForm
        onSuccess={() => {
          OnOpenChange(false);
        }}
        onCancel={() => OnOpenChange(false)}
        initialValues={initalValue}
      />
    </ResponsiveDialog>
  );
};
