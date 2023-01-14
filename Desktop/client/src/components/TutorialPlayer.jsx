import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { typeUser } from '../utils/Users';

const TutorialPlayer = ({userType}) => {

  return (userType===typeUser.GUEST)?<div> 
    <ReactPlayer 
      url='https://www.youtube.com/embed/WwZwNQr5IYA'
      width = '440px'
      height = '260px'
      controls
    />
  </div>: null;

}

export default TutorialPlayer;
