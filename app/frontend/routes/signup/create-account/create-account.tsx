import React from 'react';
import { Button } from '../../../reusable-components/button/button.tsx';
import { Card } from '../../../reusable-components/card/card.tsx';
import { FlowLayout } from '../../../reusable-components/flow-layout/flow-layout.tsx';
import { Input } from '../../../reusable-components/input/input';

export function CreateAccount() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>, stateType: 'username' | 'password') => {
    const value = event.target.value;
    switch (stateType) {
      case 'username':
        setUsername(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const createAccount = async () => {
    // event.preventDefault();
    console.log('create account');
    try {
      const response = await fetch('http://localhost:3000/api/create-account', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({user: { username, password }}),
      });

      const data = await response.json();
      console.log(data);
      console.log(response);
      if (response.ok) {
        console.log('success');
        console.log(data);
    } else {
        // setMessage(data.errors.join(', '));
        console.log(response);
        console.log(data);
      }
    } catch (error) {
      // setMessage('An error occurred. Please try again.');
      console.log(error);
    }
  };

  return (
    <FlowLayout>
    <Card
      title="Create new account"
    >
      <div className="space-y-2">
        <Input value={username} onChange={(event)=> {onInputChange(event, 'username')}} label="Username" />
        <Input value={password} onChange={(event)=> {onInputChange(event, 'password')}} label="Password" />
        <Button onClick={createAccount} >Create Account</Button>
      </div>
    </Card>
  </FlowLayout>
  );
}