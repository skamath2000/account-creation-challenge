import React from 'react';
import { Button } from '../../../reusable-components/button/button.tsx';
import { Card } from '../../../reusable-components/card/card.tsx';
import { FlowLayout } from '../../../reusable-components/flow-layout/flow-layout.tsx';
import { Input } from '../../../reusable-components/input/input';

export function CreateUser() {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const onInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    stateType: 'firstName' | 'lastName' | 'email'
  ) => {
    const value = event.target.value;
    switch (stateType) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        break;
    }
  };  

  return (
    <FlowLayout>
      <Card title="What's your first and last name?">
        <div className="space-y-2">
          <Input value={firstName} onChange={(event)=> {onInputChange(event, 'firstName')}} label="First name" />
          <Input value={lastName} onChange={(event)=> {onInputChange(event, 'lastName')}} label="Last name" />
          <Input value={email} onChange={(event)=> {onInputChange(event, 'email')}} label="Email" />
          <Button href="/signup/joint-access">Continue</Button>
        </div>
      </Card>
    </FlowLayout>
  );
}
