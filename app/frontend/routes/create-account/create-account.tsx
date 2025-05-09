import React from 'react';
import { Button } from '../../reusable-components/button/button.tsx';
import { Card } from '../../reusable-components/card/card.tsx';
import { FlowLayout } from '../../reusable-components/flow-layout/flow-layout.tsx';
import { Input } from '../../reusable-components/input/input.tsx';
import { useNavigate } from 'react-router-dom'; 
import { Alert } from '../../reusable-components/alert/alert.tsx';

export const CreateAccount = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [message, setMessage] = React.useState('');
  const navigate = useNavigate();

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

  const onAlertClose = () => {
    setMessage('');
  };

  const createAccount = async (username: string, password: string) => {
    // event.preventDefault();
    if (!username.length || !password.length) {
      setMessage('Please fill out all fields.');
      return;
    }
    try {
      const response = await fetch('http://localhost:3000/api/create-account', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({user: { username, password }}),
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/signup/account-selection');
    } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <FlowLayout >
      <Card
        title="Create new account"
      >
        <div>
          <Input value={username} onChange={(event)=> {onInputChange(event, 'username')}} label="Username" />
          <Input value={password} onChange={(event)=> {onInputChange(event, 'password')}} label="Password" />
          <Button role={'create-account'} onClick={() => { createAccount(username, password) }} >Create Account</Button>
          {message.length > 0 && <Alert message={message} onClose={onAlertClose}/>}
        </div>
      </Card>
  </FlowLayout>

  );
}
