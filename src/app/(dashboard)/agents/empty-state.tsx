import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image?: string
};
export const EmptyState = ({ title, description, image='/empty.svg' }: Props) => {
  return (
    <div className="py-4 px-4 flex flex-col items-center justify-center">
      <Image
        src={image}
        width={240}
        height={240}
        alt={"Empty"}
        style={{ height: "auto" }}
        
      />
      <div className="flex flex-col gap-y-6  max-w-md mx-auto text-center">
        <h6 className="text-lg font-medium">{title}</h6>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
