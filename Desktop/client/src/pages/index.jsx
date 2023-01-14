import React, { useState, useEffect } from "react";
import Menu from "../components/Steps21/menu";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { typeUser } from '../utils/Users';
import Maps from '../components/Steps21/roadMap'

const Steps21 = () => {
  const [session, setSession] = useState({});

  useEffect(() => {
    async function getSession(){
      let {Session} = localStorage;

      if (Session) {
        Session = JSON.parse(Session);
        const session = await axios.post('/session/get/token', {token: Session}).then(({data}) => data);
        setSession(session);
      }
    }

    getSession();
  }, []);

  // get content from:
  // #1 Manual de usuario talentum 1.3 Maybe 1.4?   https://docs.google.com/document/d/1RyYyAbxPaSGBpmDqvMKRiptqja6v6vd8zfQfJx5ZJXc/edit
  // #2 Front end ideas from template https://reduction-admin.github.io/react-reduction/widgets
  // #3 Source code template https://github.com/reduction-admin/react-reduction
  //
  return <div>
    { session.type_id==typeUser.USER?      
      <div className="row justify-content-center mt-3 mb-3" >
        <h4 className="col-12" align="center" >Tell us, Have you had interview? Or do you have a question about it?</h4>
        <Link className="col-6" to="/FormNotes">
          <input className="form-control" disabled value="Write it here"/>
        </Link>
      </div>
      :null
    }
    <Maps session={session}/>
    <Menu/>
  </div> ;
  /*View to common user*/
};

export default Steps21;
