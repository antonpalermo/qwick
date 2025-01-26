import { Outlet, useLoaderData, useNavigate } from "react-router";
import { Combobox } from "./ui/combo-box";
import { Button } from "./ui/button";
import { ChevronsUpDown } from "lucide-react";
import * as React from "react";
import { Command, CommandList, CommandGroup, CommandItem } from "./ui/command";

export type Store = {
  id: string;
  name: string;
  owner: string;
  dateCreated: string;
  dateUpdated: string;
};

export default function DashboardLayout() {
  const [open, setOpen] = React.useState(false);
  const storeData = useLoaderData();
  const navigate = useNavigate();

  return (
    <div>
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
                {storeData.data.map((store: Store) => (
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
      <Outlet />
    </div>
  );
}
