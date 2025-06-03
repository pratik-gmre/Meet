'use client'

import { authClient } from "@/lib/auth-client";


export const HomeView=()=> {

  const {data:session} = authClient.useSession()
  if(!session) return <p>Loading</p>
   return (
   <div className="text-3xl ">
    
   </div>
  );
}
