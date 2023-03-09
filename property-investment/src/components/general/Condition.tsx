import React from 'react';

interface ConditionProps {
  condition: boolean;
  children: any;
  conditionalElement?: any;
};

const Condition = ({ condition = false, children, conditionalElement }: ConditionProps) => {
  if (!condition && !!conditionalElement) { 
    return <React.Fragment>{conditionalElement}</React.Fragment>
  }

  return (
    <>
      {condition
        ? <React.Fragment>{children}</React.Fragment>
        : null
      }
    </>
  );
};

export default Condition;