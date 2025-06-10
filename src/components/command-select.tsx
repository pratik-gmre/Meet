import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandResponsiveDialog,
} from "./ui/command";

type Props = {
  options: Array<{
    id: string;
    value: string;
    children: React.ReactNode;
  }>;

  onSelect: (value: string) => void;
  onSearch?: (value: string) => void;
  value: string;
  placeholder?: string;
  isSearchable?: boolean;
  className?: string;
};

export const CommandSelect = ({
  options,
  onSelect,
  onSearch,
  value,
  placeholder = "Select a option",
  isSearchable,
  className,
}: Props) => {
  const [open, setOpen] = useState(false);
  const selectedOption = options.find((option) => option.value === value);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        type="button"
        variant="outline"
        className={cn(
          "h-9 justify-between font-normal px-2",
          !selectedOption && "text-muted-foreground",
          className
        )}
      >
        <div>{selectedOption?.children ?? placeholder}</div>
        <ChevronDownIcon />
      </Button>
      <CommandResponsiveDialog shouldFilter = {!onSearch} open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search..."
          onValueChange={onSearch}
          className="h-9"
        />
        <CommandList>
          <CommandEmpty>
            <span className="text-muted-foreground">No options found</span>
          </CommandEmpty>
          {options.map((option) => (
            <CommandItem
              key={option.id}
              onSelect={() => {
                onSelect(option.value);
                setOpen(false);
              }}
            >
              {option.children}
            </CommandItem>
          ))}
        </CommandList>
      </CommandResponsiveDialog>
    </>
  );
};
