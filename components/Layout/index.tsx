import { ReactNode, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useTheme, styled } from "@mui/material/styles";

interface Props {
  children?: ReactNode;
  title?: string;
}

const drawerWidth = 260;

const Main: any = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }: any) => ({
  ...theme.typography.mainContent,
  backgroundColor: 'rgb(227, 242, 253)',
  width: 'calc(100% - 260px)',
  padding: 20,
  transition: 'margin 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
  ...(!open && {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
      }),
      [theme.breakpoints.up('md')]: {
          width: "100%"
      },
      [theme.breakpoints.down('md')]: {
          marginLeft: '20px',
          width: "100%",
          padding: '16px'
      },
      [theme.breakpoints.down('sm')]: {
          marginLeft: '10px',
          width: "100%",
          padding: '16px',
      }
  }),
  ...(open && {
      transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      width: "100%",
      [theme.breakpoints.down('md')]: {
          marginLeft: '20px'
      },
      [theme.breakpoints.down('sm')]: {
          marginLeft: '10px'
      }
  })
}));

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <Box sx={{ display: "flex" }}>
      <Main>
        {children}
      </Main>
    </Box>
  );
};

export default Layout;
