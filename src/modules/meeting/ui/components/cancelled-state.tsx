import { EmptyState } from "@/app/(dashboard)/agents/empty-state";


export const CancelledState = () => {
  return (
    <div className="bg-white rounded-lg px-4 py-5 flex flex-col  items-center justify-center">
      <EmptyState
        title="Meeting is cancelled"
        description="This meeting is cancelled"
        image="/cancelled.svg"
      />
    </div>
  );
};
