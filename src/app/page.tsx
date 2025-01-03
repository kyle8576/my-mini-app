'use client';

import { useState } from 'react';
import { Box, AppBar, BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PeopleIcon from '@mui/icons-material/People';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export default function Page() {
  const [navValue, setNavValue] = useState(0);

  const handleImageClick = () => {
    alert('Image Clicked!');
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-web-app.js";
    script.async = true;
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          src="/example-image.png"
          alt="Clickable"
          style={{ maxWidth: '100%', cursor: 'pointer' }}
          onClick={handleImageClick}
        />
      </Box>
      <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
        <BottomNavigation
          value={navValue}
          onChange={(event, newValue) => setNavValue(newValue)}
          showLabels
          sx={{ width: '100%' }}
        >
          <BottomNavigationAction label="首頁" icon={<HomeIcon />} />
          <BottomNavigationAction label="遊戲" icon={<SportsEsportsIcon />} />
          <BottomNavigationAction label="朋友" icon={<PeopleIcon />} />
          <BottomNavigationAction label="錢包" icon={<AccountBalanceWalletIcon />} />
        </BottomNavigation>
      </AppBar>
    </Box>
  );
}
