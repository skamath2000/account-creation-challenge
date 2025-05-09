import React from 'react';
import { Card } from '../../../reusable-components/card/card.tsx';
import { FlowLayout } from '../../../reusable-components/flow-layout/flow-layout.tsx';
import { Button } from '../../../reusable-components/button/button.tsx';
import { RadioButtonGroup } from '../../../reusable-components/radio-button-group/radion-button-group.tsx';

export function AccountSelection() {
  const [accountType, setAccountType] = React.useState('');

  const radioOptions = [
    { label: 'I want to open a cash account.', value: 'cash' },
    { label: 'I want to open an investing account.', value: 'investing' }
  ];

  const onRadioButtonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccountType(event.target.value);
  };

  return (
    <FlowLayout>
      <Card title="What type of account would you like?" description="You can open a new account in just 5 minutes.">
        <RadioButtonGroup radioOptions={radioOptions} onChange={onRadioButtonChange}/>
        <Button href={`/signup/create-user?${accountType}`}>Continue</Button>
      </Card>
    </FlowLayout>
  );
}
