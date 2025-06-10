"use client";

import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

import { columns } from "../components/columns";
import { EmptyState } from "@/app/(dashboard)/agents/empty-state";
import { useAgentFilters } from "../../hooks/use-agents-filters";
import { DataPagination } from "../components/agent-paginated";
import { useRouter } from "next/navigation";
import { DataTable } from "@/components/ui/data-table";

export const AgentsView = () => {
  const router = useRouter()
  const [filters,setFilters] = useAgentFilters();
  const trpc = useTRPC();
  const { data, isLoading, isError } = useSuspenseQuery(
    trpc.agents.getMany.queryOptions({...filters})
  );

  return (
    <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4 ">
      <DataTable data ={data.items} columns={columns} onRowClick={(row)=>router.push(`/agents/${row.id}`)} />
      <DataPagination page={filters.page}
      totalPages = {data.totalPages}
      onPageChange = {(page)=>setFilters({page})}
      />
      {data.items.length === 0 && (
        <EmptyState
          title="Create your first agent"
          description="Create an agent to join meeting .Each agent will follow a specific set of instructions and interact with participate during the meeting"
        />
      )}
    </div>
  );
};
