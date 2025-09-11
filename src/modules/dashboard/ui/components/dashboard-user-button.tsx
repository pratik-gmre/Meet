'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GeneratedAvatar } from "@/components/generated-avatar";
import {  ChevronRightIcon, CreditCardIcon, LogOutIcon, UserIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export const DashboardUser = () => {
  const router = useRouter()
  const { data, isPending } = authClient.useSession();
  if (isPending || !data?.user) return null;


  const onLogout = ()=>{
     authClient.signOut({
        fetchOptions:{
            onSuccess:()=>{
                
            }
        }
    })
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-lg gap-x-2 border border-border/10 p-3 w-full flex items-center justify-between bg-white/5 hover:bg-white/10 overflow-hidden ">
        
        <div className="flex gap-0.5 text-left justify-start gap-x-3 overflow-hidden flex-1 min-w-0">
            <UserIcon fill="#fff"/>
          <div className="text-base font-semibold">Profile</div>
        </div>
        <ChevronRightIcon className="size-4 shrink-0"/>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side="right" className="w-72">
        <DropdownMenuLabel className="flex items-center justify-start gap-x-2">
            {data.user.image ? (
          <Avatar className="text-black">
            <AvatarImage
              src={data.user.image}
              alt="user"
            />
            <AvatarFallback>{data.user.name.charAt(0)}</AvatarFallback>
          </Avatar>
        ) : (
        <GeneratedAvatar seed={data.user.name} variant="initials" className="size-9 mr-3"/>
        )}
            <div className="flex flex-col gap-1">
                <span className="font-medium truncate">{data.user.name}</span>
                <span className="text-xs text-muted-foreground truncate">{data.user.email}</span>
            </div>
            
        </DropdownMenuLabel>
        <DropdownMenuSeparator/>
        <DropdownMenuItem onClick={()=>router.push("/upgrade")} className="cursor-pointer flex items-center justify-between">
            Billing 
            <CreditCardIcon className="size-4"/>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={()=>{onLogout(); router.push("/sign-in")}}  className="cursor-pointer flex items-center justify-between">
            Logout 
            <LogOutIcon className="size-4"/>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
