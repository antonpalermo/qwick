import * as React from "react";

import { Check, ChevronsUpDown } from "lucide-react";

import {
  Command,
  CommandList,
  CommandGroup,
  CommandItem
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combo-box";
import { useNavigate, useParams } from "react-router";
import { cn } from "@/lib/utils";

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
  const [selected, setSelected] = React.useState("");

  const navigate = useNavigate();
  const params = useParams();

  React.useEffect(() => {
    const currentStore = params.storeid;
    setSelected(stores.find(store => store.id === currentStore)?.name || "");
  }, [params.storeid, stores]);

  async function onSelectChange(id: string) {
    try {
      await fetch("/api/properties/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ store: { default: id } })
      });

      navigate(`/${id}`);
      setOpen(false);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      throw new Error("error");
    }
  }

  return (
    <Combobox open={open} onOpenChange={setOpen}>
      <Combobox.Trigger asChild>
        <Button
          variant="outline"
          aria-expanded={open}
          role="combobox"
          className="min-w-72 justify-between"
        >
          {selected}
          <ChevronsUpDown className="opacity-50" />
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
                    setSelected(store.name);
                    onSelectChange(store.id);
                  }}
                >
                  {store.name}
                  <Check
                    className={cn(
                      "ml-auto",
                      store.id === params.storeid ? "opacity-100" : "opacity-0"
                    )}
                  />
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
