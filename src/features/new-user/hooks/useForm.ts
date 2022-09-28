import { useState, useCallback } from 'react';
import type { ChangeEvent } from 'react';

type Props = {
  initialvalue: string;
};

const useForm = (props: Props) => {
  const [value, setValue] = useState<string>(props.initialvalue);
  const updateValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    [setValue],
  );
  return {value, updateValue};
};
export default useForm;
