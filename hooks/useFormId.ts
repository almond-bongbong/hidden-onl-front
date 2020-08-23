import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function useFormId(defaultId?: string): string {
  const [id, setId] = useState(defaultId);

  useEffect(() => {
    if (!defaultId) setId(uuidv4());
  }, [defaultId]);

  return id || '';
}

export default useFormId;
