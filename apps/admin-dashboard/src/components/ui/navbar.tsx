import * as React from "react";

import { ChevronsUpDown } from "lucide-react";

import {
  Command,
  CommandList,
  CommandGroup,
  CommandItem
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combo-box";
import { useNavigate } from "react-router";

export type Store = {
  id: string;
  name: string;
  owner: string;
  dateCreated: string;
  dateUpdated: string;
};

interface StoreSelectorProps {
  stores: Store[];
}

function StoreSelector({ stores }: StoreSelectorProps) {
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  return (
    <Combobox open={open} onOpenChange={setOpen}>
      <Combobox.Trigger asChild>
        <Button
          variant="outline"
          aria-expanded={open}
          role="combobox"
          className="min-w-72 justify-between"
        >
          Select Store
          <ChevronsUpDown className="opacity-50 " />
        </Button>
      </Combobox.Trigger>
      <Combobox.Content>
        <Command>
          <CommandList>
            <CommandGroup>
              {stores.map((store: Store) => (
                <CommandItem
                  key={store.id}
                  value={store.id}
                  onSelect={() => {
                    navigate(`/${store.id}`);
                    setOpen(false);
                  }}
                >
                  {store.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </Combobox.Content>
    </Combobox>
  );
}

export interface NavbarProps {
  stores: Store[];
}

export default function Navbar({ stores }: NavbarProps) {
  return (
    <nav className="w-full py-2">
      <div className="container mx-auto px-5">
        <div className="w-full inline-flex items-center justify-between">
          <StoreSelector stores={stores} />
          <Button>Create</Button>
        </div>
      </div>
    </nav>
  );
}
