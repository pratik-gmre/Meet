"use client";
import { DataTable } from "@/components/ui/data-table";
import { useTRPC } from "@/trpc/client";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { columns } from "../components/columns";
import { EmptyState } from "@/app/(dashboard)/agents/empty-state";
import { useRouter } from "next/navigation";
import { useMeetingFilters } from "../../hooks/use-meetings-filters";
import { DataPagination } from "@/components/agent-paginated";

// type Props = {
//     meetingId:string
// }

export const MeetingsView = () => {
  const trpc = useTRPC();
  const router = useRouter();
  const [filter, setFilters] = useMeetingFilters();

  const { data } = useSuspenseQuery(
    trpc.meetings.getMany.queryOptions({
      ...filter,
    })
  );
  return (
    <div className="flex-1 pb-4 md:px-8 flex flex-col gap-y-4">
      <DataTable
        data={data.items}
        columns={columns}
        onRowClick={(row) => router.push(`/meetings/${row.id}`)}
      />
      <DataPagination
        page={filter.page}
        totalPages={data.totalPages}
        onPageChange={(page) => setFilters({ page })}
      />
      {data.items.length === 0 && (
        <EmptyState
          title="Create your meeting"
          description="Create a meeting to join meeting .Each meeting will follow a specific set of instructions and interact with participate during the meeting"
        />
      )}
    </div>
  );
};
