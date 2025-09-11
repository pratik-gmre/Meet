import { EmptyState } from "@/app/(dashboard)/agents/empty-state";


export const ProcessingState = () => {
  return (
    <div className="bg-white rounded-lg px-4 py-5 flex flex-col  items-center justify-center">
      <EmptyState
        title="Meeting completed"
        description="This meeting is completed"
        image="/processing.svg"
      />
    </div>
  );
};
