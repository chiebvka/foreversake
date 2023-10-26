import React from 'react'
import { AiOutlineLeft, AiOutlinePlusCircle } from 'react-icons/ai';
import { BsPencil } from "react-icons/bs";

type Props = {
  type: string
}

const IconRenderer = ({ type }: Props) => {
  let icon;

  switch (type) {
    case 'home':
      icon = <BsPencil className='w-5 h-5 text-primary'/>;
      break;
    case 'vault':
      icon = <AiOutlinePlusCircle className='w-5 h-5 text-primary'/>;
      break;
    case 'save':
      icon = null;
      break;
    default:
      icon = null;
  }

  return (
    <div>
      {icon}
    </div>
  );
};

const ProfileHeader = ({type}: Props) => {
  return (
    <div className='w-full flex items-center justify-between mb-4'>
      <AiOutlineLeft className='w-5 h-5 text-primary'/>
      <img src="/Foreversake_Logo_Realism.webp" alt="logo" className="w-16 h-16 object-contain" />
      {type == 'home' && <IconRenderer type='home'/>}
      {type == 'vault' && <IconRenderer type='vault'/>}
      {type == 'save' && <IconRenderer type='save'/>}
    </div>
  )
}

export default ProfileHeader