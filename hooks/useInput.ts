import { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from 'react';

type Return = [string, (e: ChangeEvent<HTMLInputElement>) => void, Dispatch<SetStateAction<string>>];

function useInput(initialValue = ''): Return {
  const [value, setValue] = useState(initialValue);

  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, handler, setValue];
}

export default useInput;
