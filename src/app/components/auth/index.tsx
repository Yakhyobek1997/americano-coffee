import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Fab, Stack, TextField, Typography, Box } from "@mui/material";
import styled from "styled-components";
import LoginIcon from "@mui/icons-material/Login";
import { T } from "../../../lib/types/common";
import { Messages } from "../../../lib/config";
import { LoginInput, MemberInput } from "../../../lib/types/member";
import MemberService from "../../services/MemberService";
import { sweetErrorHandling } from "../../../lib/sweetAlert";
import { useGlobals } from "../../../hooks/useGlobals";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  paper: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
    padding: theme.spacing(4),
    maxWidth: 420,
    width: "90%",
    transition: "all 0.3s ease-in-out",
    border: "none",
  },
}));

const ModalImg = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 16px;
`;

interface AuthenticationModalProps {
  signupOpen: boolean;
  loginOpen: boolean;
  handleSignupClose: () => void;
  handleLoginClose: () => void;
}

export default function AuthenticationModal(props: AuthenticationModalProps) {
  const { signupOpen, loginOpen, handleSignupClose, handleLoginClose } = props;
  const classes = useStyles();
  const [memberNick, setMemberNick] = useState<string>("");
  const [memberPhone, setMemberPhone] = useState<string>("");
  const [memberPassword, setMemberPassword] = useState<string>("");
  const { setAuthMember } = useGlobals();

  const handleUsername = (e: T) => setMemberNick(e.target.value);
  const handlePhone = (e: T) => setMemberPhone(e.target.value);
  const handlePassword = (e: T) => setMemberPassword(e.target.value);

  const handlePasswordKeyDown = (e: T) => {
    if (e.key === "Enter") {
      if (signupOpen) handleSignupRequest();
      if (loginOpen) handleLoginRequest();
    }
  };

  const handleSignupRequest = async () => {
    try {
      if (!memberNick || !memberPhone || !memberPassword) throw new Error(Messages.error3);
      const input: MemberInput = { memberNick, memberPhone, memberPassword };
      const result = await new MemberService().signup(input);
      setAuthMember(result);
      handleSignupClose();
    } catch (err) {
      handleSignupClose();
      sweetErrorHandling(err);
    }
  };

  const handleLoginRequest = async () => {
    try {
      if (!memberNick || !memberPassword) throw new Error(Messages.error3);
      const input: LoginInput = { memberNick, memberPassword };
      const result = await new MemberService().login(input);
      setAuthMember(result);
      handleLoginClose();
    } catch (err) {
      handleLoginClose();
      sweetErrorHandling(err);
    }
  };

  const renderForm = (isSignup: boolean) => (
    <Stack className={classes.paper} alignItems="center">
      <ModalImg src="/img/lockPhoto.jpg" alt="auth" />

      <Typography variant="h6" gutterBottom>
        {isSignup ? "Signup Form" : "Login Form"}
      </Typography>

      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        size="small"
        sx={{ mb: 2 }}
        onChange={handleUsername}
      />

      {isSignup && (
        <TextField
          label="Phone Number"
          variant="outlined"
          fullWidth
          size="small"
          sx={{ mb: 2 }}
          onChange={handlePhone}
        />
      )}

      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        size="small"
        onChange={handlePassword}
        onKeyDown={handlePasswordKeyDown}
      />

      <Fab
        variant="extended"
        color="primary"
        sx={{ mt: 3, width: "130px" }}
        onClick={isSignup ? handleSignupRequest : handleLoginRequest}
      >
        <LoginIcon sx={{ mr: 1 }} />
        {isSignup ? "Signup" : "Login"}
      </Fab>
    </Stack>
  );

  return (
    <div>
      <Modal
        open={signupOpen}
        onClose={handleSignupClose}
        className={classes.modal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={signupOpen}>{renderForm(true)}</Fade>
      </Modal>

      <Modal
        open={loginOpen}
        onClose={handleLoginClose}
        className={classes.modal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={loginOpen}>{renderForm(false)}</Fade>
      </Modal>
    </div>
  );
}
