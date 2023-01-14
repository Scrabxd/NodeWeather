import React, { useEffect } from "react";
import AuthForm from "../components/AuthForm";
import { Card, Col } from "reactstrap";
import { typeUser } from "../utils/Users";
import loginBack from '../assets/img/loginBack.png'

function AuthPage (props) {
  useEffect(() => {
    let { Session } = localStorage;

    if (Session && JSON.parse(Session).active) {
      Session = JSON.parse(Session);
      const href = "/MyProfile";
        typeUser[Session.type] === typeUser.PARTNER ? "/MyProfile" : "/MyProfile";
        props.history.push(href);
    }
  }, [])

  return <>
    <div align="center"
      style={{
        position: 'fixed',
        zIndex: '2',
        maxWidth: '100%',
        alignItem: 'center',
        width: '100%',
        top: '50%',
        transform: 'translate(0, -50%)'
      }}
    >
      <Card body className="col-sm-12 col-md-6 col-lg-4 ps-5 pe-5">
        <AuthForm {...props}/>
      </Card>
    </div>
    <div style={{
      backgroundImage: `url('${loginBack}')`,
      position: 'fixed',
      height: '100%',
      width: '100%',
      zIndex: 1,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}></div>
  </>;
}

export default AuthPage;
