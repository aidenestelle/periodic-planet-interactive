import * as React from "react";

export interface SidebarContextType {
  isMobile: boolean;
  state: string;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  toggleSidebar: () => void;
}

export const SidebarContext = React.createContext<SidebarContextType | null>(null);
