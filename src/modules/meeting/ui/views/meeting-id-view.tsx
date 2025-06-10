"use client";

import { useTRPC } from "@/trpc/client";
import { useMutation, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { MeetingIdViewHeader } from "../components/meeting-id-view-header";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useConfirm } from "../../hooks/use-confirm";
import { UpdateMeetingDialog } from "../components/update-meetings-dialog";
import { useState } from "react";

type Props = {
  meetingId: string;
};

export const MeetingIdView = ({ meetingId }: Props) => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const router = useRouter();

  const [updateMeetingDialog, setupdateMeetingDialog] = useState(false);

  const { data } = useSuspenseQuery(
    trpc.meetings.getOne.queryOptions({ id: meetingId })
  );

  const [RemoveConfirmation, confirmRemove] = useConfirm(
    "Are you sure?",
    `The following action will remove this meeting`
  );

  const removeMeeting = useMutation(
    trpc.meetings.remove.mutationOptions({
      onSuccess: () => {
        queryClient.invalidateQueries(trpc.meetings.getMany.queryOptions({}));
        //invalidate free tier usage
        router.push("/meetings");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    })
  );

  const handleRemoveMeeting = async () => {
    
    const ok = await confirmRemove();
    if (!ok) return;
    await removeMeeting.mutateAsync({ id: meetingId });
  };

  return (
    <>
      <RemoveConfirmation />
      <UpdateMeetingDialog
        open={updateMeetingDialog}
        OnOpenChange={setupdateMeetingDialog}
        initalValue={data}
      />
      <div className="flex-1 py-4 px-4 flex flex-col gap-y-4">
        <MeetingIdViewHeader
          meetingId={meetingId}
          meetingName={data.name}
          onEdit={() => setupdateMeetingDialog(true)}
          onRemove={handleRemoveMeeting}
        />
        {JSON.stringify(data)}
      </div>
    </>
  );
};
