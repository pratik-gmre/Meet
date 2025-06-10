import { ResponsiveDialog } from "@/components/responsive-dialog";
import { AgentForm } from "./agent-form";
import { AgentGetOne } from "../../types";

type Props = {
  open: boolean;
  OnOpenChange: (open: boolean) => void;
  initialValues: AgentGetOne;
};

export const UpdateAgentDialog = ({
  open,
  OnOpenChange,
  initialValues,
}: Props) => {
  return (
    <ResponsiveDialog
      title="Edit Agent"
      description="Edit agent detail"
      open={open}
      onOpenChange={OnOpenChange}
    >
      <AgentForm
        onSuccess={() => OnOpenChange(false)}
        onCancel={() => OnOpenChange(false)}
        initialValues={initialValues}
      />
    </ResponsiveDialog>
  );
};
