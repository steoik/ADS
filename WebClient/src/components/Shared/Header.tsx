import React, { useCallback } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Modal } from "@mui/base";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";
import "../../css/index.css";
import Typography from "@mui/material/Typography";

export default function Header(props: any) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "var(--primary-color)" }}>
        <Toolbar>
          <Grid container columnGap={3} justifyContent="flex-end">
            <Grid>
              <Link to={"/"} onClick={() => props.setIsSearch(true)}>
                <Typography variant="body1" color="white">
                  Αναζήτηση
                </Typography>
              </Link>
            </Grid>
            <Grid>
              <Button
                onClick={() => setOpen(true)}
                variant="contained"
                sx={{
                  color: "var(--on-primary-container)",
                  backgroundColor: "var(--primary-container)",
                  ":hover": {
                    color: "var(--on-secondary)",
                    backgroundColor: "var(--secondary)",
                  },
                  textTransform: "none !important",
                }}
              >
                Σύνδεση
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div>
          {true ? <SignIn /> : <SignUp />}
          <Button onClick={() => setOpen(false)}>
            <CloseIcon></CloseIcon>
          </Button>
        </div>
      </Modal>
    </>
  );
}
