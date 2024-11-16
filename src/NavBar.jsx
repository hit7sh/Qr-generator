import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavBar() {
    return (
        (<div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
        </div>)
    );
}

function Navbar({
    className
}) {
    const [active, setActive] = useState(null);
    return (
        (<div
            className={cn("fixed top-10 inset-x-0 z-50 flex justify-end", className)}>
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Contact Me">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="https://mail.google.com/mail/?view=cm&fs=1&to=hit7sh@gmail.com">G-Mail📩</HoveredLink>
                        <HoveredLink href="https://www.linkedin.com/in/hitesh-saini-80499a1b3/">LinkedIn</HoveredLink>
                        <HoveredLink href="https://x.com/hit7sh">Twitter</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>)
    );
}
