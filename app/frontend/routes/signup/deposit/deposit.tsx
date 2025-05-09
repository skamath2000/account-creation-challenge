import React from 'react';
import { Button } from '../../../reusable-components/button/button.tsx';
import { Card } from '../../../reusable-components/card/card.tsx';
import { FlowLayout } from '../../../reusable-components/flow-layout/flow-layout.tsx';
import { Input } from '../../../reusable-components/input/input.tsx';

export function Deposit() {
  const [deposit, setDeposit] = React.useState(0);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isNaN(event.target.valueAsNumber)) {
      setDeposit(event.target.valueAsNumber)
    }
  };

  return (
    <FlowLayout>
      <Card title="Deposit funds" description="Accounts can be funded with as little as $5.">
        <div>
          <Input value={deposit} onChange={onInputChange} label="Deposit Amount" />
          <Button href="/signup/account-selection">Start over</Button>
        </div>
      </Card>
    </FlowLayout>
  );
}
