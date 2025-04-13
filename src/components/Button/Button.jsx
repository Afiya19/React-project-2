import React from 'react'
import styles from './Button.module.css'
export const Button = ({isOutline , text, icon}) => {
  return (
    <>
    <button className={isOutline ? styles.outline_btn : styles.primary_btn}>
    {icon}
    {text}
    </button>
    
    </>
  )
}
