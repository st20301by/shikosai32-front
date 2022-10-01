import type { FC } from 'react';
import Character from './components/character';
import Form from './components/form';
import Submit from './components/submit';
import Top from './components/top';
import useCharacter from './hooks/useCharacter';
import useForm from './hooks/useForm';
import authActions from '@/state/authState';

const NewUser: FC = () => {
  const user = authActions.useCurrentUser();
  const id = user?.uid ? user.uid : '';
  const { value: email, updateValue: updateEmail } = useForm({ initialvalue: user?.email });
  const { value: name, updateValue: updateName } = useForm({ initialvalue: user?.displayName });
  const { checkedItems, checkedCharcter, handleChange } = useCharacter();

  return (
    <div>
      <Top />
      <Form email={email} updateEmail={updateEmail} name={name} updateName={updateName} />
      <Character checkedItems={checkedItems} handleChange={handleChange} />
      <Submit email={email} name={name} character={checkedCharcter} id={id} />
    </div>
  );
};

export default NewUser;
