import React, { ReactNode } from "react";
import {
  Drawer,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { Link } from "react-router-dom-v6";
interface ILayout {
  children: ReactNode;
}
const drawerWidth = 256;
const topListItems = [
  {
    name: "Dashboard",
    icon: "Dash",
    path: "/dashboard",
  },
  {
    name: "Users",
    icon: "User",
    path: "/users",
  },
  {
    name: "Customers",
    icon: "Cust",
    path: "/customer",
  },
  {
    name: "Sites",
    icon: "Site",
    path: "/sites",
  },
];

const Layout = ({ children }: ILayout) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          backgroundColor: "yellow",
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            padding: 3,
            backgroundColor: "green",
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={true}
      >
        <Box sx={{ pt: 2, pb: 5, textAlign: "center" }}>
          Matrix
          {/*<img src={hebibsonLogo} alt="logo" width={125} height={33}/>*/}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100vh",
          }}
        >
          <List>
            {topListItems.map((item, index) => (
              <Link to={item.path} style={{ textDecoration: "none" }}>
                {" "}
                <ListItem key={index} disablePadding sx={{ my: 1 }}>
                  <ListItemButton sx={{ backgroundColor: "white" }}>
                    <Box sx={{ marginRight: "4px" }}>
                      {/*<img src={item.icon} alt="icons" key={index}  />*/}
                    </Box>
                    <Box sx={{ color: "red", fontSize: 14, fontWeight: 700 }}>
                      {item.name}
                    </Box>
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
        <Divider />
      </Drawer>
      <Box sx={{ minHeight: "100vh", width: "100%" }}>
        <Box
          sx={{ height: "80px", backgroundColor: "red", width: "100%" }}
        ></Box>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
