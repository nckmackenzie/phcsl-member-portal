import { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

function SidebarProvider({ children }) {
  const [opened, setOpened] = useState(false);

  function open() {
    setOpened(true);
  }

  function close() {
    setOpened(false);
  }

  return (
    <SidebarContext.Provider value={{ opened, open, close }}>
      {children}
    </SidebarContext.Provider>
  );
}

function useSidebar() {
  const context = useContext(SidebarContext);

  if (context === undefined)
    throw new Error('SidebarContext used outside SidebarProvider');

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { SidebarProvider, useSidebar };
