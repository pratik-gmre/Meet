
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const Page = async() => {

   const session = await auth.api.getSession({
      headers: await headers(),
    });
  
  
    if (session == null) {
      redirect("/sign-in");
    }
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          Upgrade
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          Premium features are launching soon. Stay tuned — bigger, better tools
          are on the way.
        </p>

        <button
          disabled
          className="px-6 py-3 rounded-lg border border-transparent text-base font-semibold shadow-sm bg-slate-900 text-white opacity-90 cursor-not-allowed mb-6"
        >
          Coming Soon
        </button>

        <div className="mt-6 text-left">
          <ul className="space-y-4 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-800">
                ✓
              </span>
              <div>
                <div className="font-semibold">Higher meeting limits</div>
                <div className="text-sm text-slate-500">
                  Host longer meetings and add more participants.
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-800">
                ✓
              </span>
              <div>
                <div className="font-semibold">AI assistant integration</div>
                <div className="text-sm text-slate-500">
                  Bring AI agents into calls and transcriptions (beta).
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-800">
                ✓
              </span>
              <div>
                <div className="font-semibold">Advanced recording & storage</div>
                <div className="text-sm text-slate-500">
                  Save and export recordings to cloud storage providers.
                </div>
              </div>
            </li>
          </ul>
        </div>

        <p className="mt-8 text-sm text-slate-500">
          Want early access? Leave your email at pratikgmre13@gmail.com 
          and we&apos;ll label invite early adopters first.
        </p>
      </div>
    </main>
  );
};

export default Page;
