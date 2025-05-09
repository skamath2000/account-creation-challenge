import React from 'react';
import { Button } from '../../../reusable-components/button/button.tsx';
import { Card } from '../../../reusable-components/card/card.tsx';
import { FlowLayout } from '../../../reusable-components/flow-layout/flow-layout.tsx';
import { Input } from '../../../reusable-components/input/input';
import { RadioButtonGroup } from 'app/frontend/reusable-components/radio-button-group/radio-button-group.tsx';

export function JointAccess() {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [radioOptions, setRadioOptions] = React.useState([
    { label: 'Yes, I want to add a joint account holder.', value: 'yes' },
    { label: 'No, I do not want to add a joint account holder.', value: 'no' }
  ]);

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

  const JointAccount = () => (
    <div className="mt-4">
      <Input value={firstName} onChange={(event) => {onInputChange(event, 'firstName')}} label="First name" />
      <Input value={lastName} onChange={(event) => {onInputChange(event, 'lastName')}} label="Last name" />
      <Input value={email} onChange={(event) => {onInputChange(event, 'email')}} label="Email" />
    </div>
  );

  const onRadioButtonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === 'yes') {
      setRadioOptions((prevOptions) =>
        prevOptions.map((option) => {
          if (option.value === value) {
            return { ...option, children: <JointAccount /> };
          }
          return { ...option };

        })
      );
    } else {
      setRadioOptions((prevOptions) =>
        prevOptions.map((option) => {
          return { value: option.value, label: option.label, children: undefined };
        })
      );
    }
  }

  return (
    <FlowLayout>
      <Card
        title="Will this be a joint account?"
        description="Joint accounts allow for a secondary account holder which provides the same level of access as the primary."
      >
        <div>
          <RadioButtonGroup radioOptions={radioOptions} onChange={onRadioButtonChange}/>
          <Button href="/signup/stock-restrictions">Continue</Button>
        </div>
      </Card>
    </FlowLayout>
  );
}
