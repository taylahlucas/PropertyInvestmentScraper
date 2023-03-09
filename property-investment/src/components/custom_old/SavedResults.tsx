import React, { useState } from 'react';
import MenuOpenBar from '@/components/general/MenuOpenBar';
import Condition from '@/components/general/Condition';

const SavedResults = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div style={{ 
      right: 0, 
      position: 'fixed',
      flexDirection: 'row',
      backgroundColor: 'yellow',
      borderRadius: 5
    }}>
    <Condition 
      condition={menuOpen}
      conditionalElement={
        <MenuOpenBar 
          backgroundColor={'green'}
          isMenuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
      />
    }>
      <>
        <MenuOpenBar 
          backgroundColor={'green'}
          isMenuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <div style={{ 
          width: 400,
          height: 350,
        }} />
      </>
    </Condition>
    </div>
  );
};

export default SavedResults;