import * as React from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from "@/components/ui/drawer";

export const DrawerExample = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger>Open Drawer</DrawerTrigger>
        <DrawerContent>
          <DrawerClose onClick={() => setOpen(false)} />
          <h2 className="text-xl">Drawer Content</h2>
          <p>Here is the content inside the drawer.</p>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
