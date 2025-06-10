import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { auth } from "@/lib/auth";
import { loadSearchParams } from "@/modules/meeting/params";

import { MeetingsListHeader } from "@/modules/meeting/ui/components/meetings-list-header";
import { MeetingsView } from "@/modules/meeting/ui/views/meeting-view";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import  type {SearchParams} from 'nuqs/server'

import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

type Props ={
  searchParams:Promise<SearchParams>
}

const page = async ({searchParams}:Props) => {
  const filters = await loadSearchParams(searchParams)
const session =  await auth.api.getSession({
    headers: await headers()
})

if(!session){
    redirect('/sign-in')
}

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(
    trpc.meetings.getMany.queryOptions({
      ...filters
    })
  );
  return (
    <>
    <MeetingsListHeader/>
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<LoadingState title="Loading Meetings" description="This may take a few seconds" />}>
        <ErrorBoundary fallback={<ErrorState title="Error loading Meetings" description="Please try again later" />}>
          <MeetingsView  />
        </ErrorBoundary>
      </Suspense>
    </HydrationBoundary>
    </>
  );
};

export default page;
