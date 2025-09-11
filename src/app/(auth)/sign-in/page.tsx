import { auth } from "@/lib/auth";
import { SignInView } from "@/modules/auth/ui/views/sign-in-view";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";



const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!!session) {
    //!!session treat session as boolean and session is treated as its type so use !!session
    redirect("/");
  }

  return <SignInView />;
};

export default page;
