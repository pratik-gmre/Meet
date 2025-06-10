
import {createAvatar} from '@dicebear/core'
import {botttsNeutral , initials} from '@dicebear/collection'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from '@/lib/utils';

type GeneratedAvatarProps = {
    seed: string;
    className?:string
    variant:'botttsNeutral' | 'initials'
};


export const GeneratedAvatar = ({seed , variant, className}:GeneratedAvatarProps) => {
    let avatar;
    if(variant === 'botttsNeutral') {
        avatar = createAvatar(botttsNeutral, {
            seed,
            size: 40
        })
    } else {
        avatar = createAvatar(initials, {
            seed,
            fontWeight: 500,
            fontSize:42
        })
    }
    return (
        <Avatar className={cn(className)}>
            <AvatarImage src={avatar.toDataUri()} />
            <AvatarFallback>{seed.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
    )
    
}