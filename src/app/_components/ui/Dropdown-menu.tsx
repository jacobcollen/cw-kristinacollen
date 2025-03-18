import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const DropdownMenuComponent = ({
  onSelect,
}: {
  onSelect: (category: string) => void;
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger>Böcker</DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem onClick={() => onSelect("Alla böcker")}>
        Alla böcker
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => onSelect("Böcker för barn")}>
        Böcker för barn
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => onSelect("Böcker för vuxna")}>
        Böcker för vuxna
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);
