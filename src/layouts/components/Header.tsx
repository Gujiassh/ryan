import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { useState } from 'react';

export const Header = () => {
  const [value, setValue] = useState(0);
  return <Box sx={{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }}>
    <h2>Ryan</h2>
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        console.log({ newValue });
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Recents" />
      <BottomNavigationAction label="Favorites" />
      <BottomNavigationAction label="Nearby" />
    </BottomNavigation>
    <Box>
      <div>12323</div>
    </Box>
  </Box>
}