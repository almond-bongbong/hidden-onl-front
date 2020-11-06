import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

function useFormId(defaultId?: string): string {
  const [id, setId] = useState(defaultId);

  useEffect(() => {
    if (!defaultId) setId(uuid());
  }, [defaultId]);

  return id || '';
}

export default useFormId;
