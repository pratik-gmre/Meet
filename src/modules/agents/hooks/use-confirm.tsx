import { ResponsiveDialog } from "@/components/responsive-dialog";
import { Button } from "@/components/ui/button";
import { JSX, useState } from "react";

export const useConfirm = (
  title: string,
  description: string
): [() => JSX.Element, () => Promise<unknown>] => {
  const [promise, setPromise] = useState<{
    resolve: (value: boolean) => void;
  } | null>(null);

  const confirm = () => {
    return new Promise((resolve) => {
      setPromise({ resolve });
    });
  };
  const handleClose = () => {
    setPromise(null);
  };

  const handleConfirm = () => {
    promise?.resolve(true);
    handleClose();
  };

  const handleCancel = () => {
    promise?.resolve(false);
    handleClose();
  };

  const ConfirmationDialog = () => {
    return (
    <ResponsiveDialog
      open={promise != null}
      onOpenChange={handleClose}
      title={title}
      description={description}
    >
      <div className="flex  flex-col-reverse pt-4 w-full gap-y-2  gap-x-2  items-center justify-end">

        <Button onClick={handleCancel} variant={"outline"} className="w-full ">Cancel</Button>
        <Button onClick={handleConfirm}  className="w-full " >Confirm</Button>
        
        </div>{" "}
    </ResponsiveDialog>
    )
  };


  return [ ConfirmationDialog, confirm ];
};
