import { Loader2Icon } from "lucide-react"



type Props = {
    title:string
    description:string 
}
export const LoadingState = ({title,description}:Props) => {
    return (
                <div className="py-4 px-4 flex flex-1 items-center justify-center">
                    <div className="flex flex-col justify-center items-center gap-y-6 bg-background rounded-lg p-10 shadow-sm">

                        <Loader2Icon className="size-6 animate-spin text-primary "/>
                        <div className="flex flex-col gap-y-2 text-center">
<h6 className="text-lg font-medium">{title}</h6>
                            <p className="text-sm">{description}</p>
                        </div>

                    </div>
                </div>

    )
}