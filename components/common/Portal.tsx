import { ReactNode, ReactPortal, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { addRootElement } from '../../libs/element';
import { isBrowser } from '../../libs/validation';

interface Props {
  children: ReactNode;
}

const PORTAL_ID = 'portal-container';
addRootElement(PORTAL_ID);

function Portal({ children }: Props): ReactPortal | null {
  const el = useRef(isBrowser() && document.createElement('div'));
  const portalContainer = isBrowser() && document.getElementById(PORTAL_ID);

  useEffect(() => {
    if (portalContainer && el.current) {
      portalContainer.appendChild(el.current);
    }
  }, []);

  return isBrowser() && el.current ? createPortal(children, el.current) : null;
}

export default Portal;
