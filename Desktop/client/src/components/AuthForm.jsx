import logo200Image from "../assets/img/logo/loginRoadmap.svg";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { typeUser } from "../utils/Users";
import {
  TextField,
  Button,
  Alert,
  Stack,
  Link,
  CircularProgress
} from '@mui/material'

function AuthForm(props) {
  let [campEmail, setCampEmail] = useState("")
  let [campPasswd, setCampPasswd] = useState("")
  const [useError, setError] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    let { Session } = localStorage;

    if (Session) {
      Session = JSON.parse(Session);
      axios.post('/session/get/token', { token: Session })
        .then(({ data }) => {
          if (data) {
            props.history.push(data.type_id == typeUser.GUEST || data.type_id == typeUser.PARTNER ?
              '/positions'
              : '/MyProfile'
            )
          }
        });
    }
  }, [])

  const handleSubmit = () => {
    setError("")
    setLoading(true)
    axios.post("/login", {
      email: campEmail,
      passwd: campPasswd,
    }).then(({ data }) => {
      if (!data.success) {
        setError("Email or/and Password incorrect");
      } else {
        let href = "/MyProfile";
        const session = {
          ...data.data,
          active: true,
        };
        if ([typeUser.PARTNER, typeUser.GUEST].some(t => t == data.data.type_id))
          href = "/positions";

        localStorage.setItem("Session", JSON.stringify(session.token));
        props.history.push(href);
      }
    })
      .catch((error) => {
        console.log(error)
        setError("Email or/and Password incorrect");
      }).finally(() => {
        setLoading(false)
      });
  };

  const Showalert = () => {
    if (useError)
      return (
        <Alert severity="error" >
          {useError}
        </Alert>
      );
    return null;
  };

  const initSession = ({ key, target }) => {
    //iniciar session

    if (key == 'Enter' || target.type == 'button') {
      setError(false);
      if (campEmail && campPasswd) {
        handleSubmit();
        return;
      }
      setError("Empty field (s)");
    }
  };

  return (
    <form onSubmit={e => e.preventDefault()} onKeyUp={initSession} >
      <div className="text-center pb-4 mt-4">
        <img
          src={logo200Image}
          className="rounded"
          style={{ maxWidth: "80%", maxHeight: "10%" }}
          alt="logo"
        />
      </div>
      <Showalert />
      <Stack className="mt-4" justifyContent="center" direccion="column" spacing={2}>
        <TextField
          name="email"
          label="Email"
          onChange={e => setCampEmail(e.target.value)}
          placeholder="Write your email here"
          autoFocus
          focused
        />
        <TextField
          type="password"
          name="password"
          label="Password"
          onChange={e => setCampPasswd(e.target.value)}
          placeholder="Write your password here"
          focused
        />
      </Stack>
      <Stack spacing={2} className="mt-3" >
        <Button
          style={{ background: '#4763E4', borderRadius: '12px' }}
          variant="contained"
          size="large"
          disabled={isLoading}
          onClick={initSession}
        >
          {
            isLoading ? <CircularProgress /> : 'Login'
          }
        </Button>
        { /*<Link>I forgot my password</Link>*/}
      </Stack>
    </form>
  );
}

export default AuthForm;
