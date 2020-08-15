import { createContext, ReactElement, ReactNode, useCallback, useContext, useState } from 'react';

interface Context {
  active: boolean;
  openSideBar: () => void;
  closeSideBar: () => void;
}

interface Props {
  children: ReactNode;
}

export const SideBarContext = createContext<Context>({
  active: false,
  openSideBar: () => null,
  closeSideBar: () => null,
});

export function SideBarProvider({ children }: Props): ReactElement {
  const [active, setActive] = useState(false);

  const openSideBar = useCallback(() => {
    setActive(true);
  }, []);

  const closeSideBar = useCallback(() => {
    setActive(false);
  }, []);

  return <SideBarContext.Provider value={{ active, openSideBar, closeSideBar }}>{children}</SideBarContext.Provider>;
}

export function useSideBarContext(): Context {
  return useContext(SideBarContext);
}
