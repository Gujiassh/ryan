import { Link, Outlet } from 'umi';
import styles from './index.less';
import { Header } from './components/Header';
import { Box } from '@mui/material';

export default function Layout(props) {
  console.log({ props })
  return (
    <Box >
      <Header>
      </Header>
      <Outlet />
      <div>
        321
      </div>
    </Box>
  );
}
