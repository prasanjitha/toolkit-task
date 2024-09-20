import React from 'react'
import Styles from "./MainButton.module.css";

type ButtonProps ={
    title: string;
    onClick?: () => void;
}

const MainButton = ({ title, onClick }:Readonly<ButtonProps>) => {
  return (
      <button className={Styles.signInBtn} onClick={onClick}>{title}</button>
  )
}

export default MainButton