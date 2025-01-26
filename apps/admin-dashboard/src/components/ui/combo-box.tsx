"use client";

import * as React from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { PopoverProps } from "@radix-ui/react-popover";

export type ComboboxProps = PopoverProps & {};

export function Combobox({ ...props }: ComboboxProps) {
  return <Popover {...props} />;
}

Combobox.Trigger = PopoverTrigger;
Combobox.Content = React.forwardRef<
  React.ElementRef<typeof PopoverContent>,
  React.ComponentPropsWithoutRef<typeof PopoverContent>
>(props => {
  return <PopoverContent className="min-w-72 p-0" {...props} />;
});

