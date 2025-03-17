import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const DropdownMenuComponent = () => (
  <DropdownMenu>
    <DropdownMenuTrigger>Böcker</DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>Alla böcker</DropdownMenuItem>
      <DropdownMenuItem>Böcker för barn</DropdownMenuItem>
      <DropdownMenuItem>Böcker för vuxna</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);
