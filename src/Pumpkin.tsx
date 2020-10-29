import React from 'react'
import { cssJoinFactory } from './utilities/cssJoin'
import styles from './Pumpkin.module.css'

const cj = cssJoinFactory(styles)

const Pumpkin: React.FC = () => {
  return (
    <div className={cj('pumpkin')} >
      <div className={cj('pumpkin--inner')} >
        <div className={cj('pumpkin__stem')} />
        <div className={cj('pumpkin__longitude pumpkin__longitude--1')} />
        <div className={cj('pumpkin__longitude pumpkin__longitude--2')} />
        <div className={cj('pumpkin__longitude pumpkin__longitude--3')} />
      </div>
    </div>
  )
}

export default Pumpkin
