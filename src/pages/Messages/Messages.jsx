import React from "react";
import { Redirect, useParams } from "react-router";
import { NavLink } from "react-router-dom";

/* Components */
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

const drawerWidth = 240;
export default function MessagesPage(props) {
  const { dialogId } = useParams();

  /* State */
  const [value, setValue] = React.useState("");

  /* Variables from the state/props */
  const { dialogs, messages } = props.messagesPage;

  /* Redirect to the login */
  if (!props.isAuth === false) return <Redirect to="/sign-in" />;
  return (
    <Stack
      direction="row"
      spacing={2}
      divider={<Divider flexItem />}
      sx={{ width: "100%" }}
    >
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            top: "69px",
          },
        }}
      >
        <Box sx={{ overflow: "auto" }}>
          <Stack>
            {dialogs.map((dialog, index) => (
              <ListItem
                key={index}
                disablePadding
                sx={{
                  borderBottom: "1px solid rgb(189, 189, 189)",
                  backgroundColor:
                    Number(dialogId) === dialog.id
                      ? "#a985e9b0"
                      : "transparent",
                }}
              >
                <ListItemButton>
                  <ListItemText
                    primary={dialog.name}
                    sx={{
                      color:
                        Number(dialogId) === dialog.id ? "#FFFFFF" : "black",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </Stack>
        </Box>
      </Drawer>
      <Stack spacing={2} divider={<Divider flexItem />} sx={{ width: "70%" }}>
        <Stack spacing={2}>
          {messages.map((m, index) => (
            <Card variant="outlined" key={index} sx={{ p: 2 }}>
              <Typography variant="body1">{m.message}</Typography>
            </Card>
          ))}
        </Stack>
        <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
          <TextField
            sx={{ width: "70%" }}
            value={value}
            variant="filled"
            onChange={(e) => setValue(e.target.value)}
            label="Your message"
          />

          <Button
            sx={{ width: "30%" }}
            variant="contained"
            disabled={value === ''}
            onClick={() => {
              props.sendMessage(value);
              setValue("");
            }}
          >
            Send
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
