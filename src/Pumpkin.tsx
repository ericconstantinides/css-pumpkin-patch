import React from 'react'
import { cssJoinFactory } from './utilities/cssJoin'
import styles from './Pumpkin.module.css'
import { getRandomInt } from './utilities/utilities'

const cj = cssJoinFactory(styles)

const Pumpkin: React.FC = () => {
  const bottom = getRandomInt(1, 115)
  const left = getRandomInt(0, 100)
  const width = getRandomInt(80, 150)
  const height = getRandomInt(80, 120)
  const top = bottom * -1 + 100
  const zIndex = top
  const scale = top * 0.01
  const transform = `scale(${scale})`
  const style = {
    bottom: (Math.log(bottom) / Math.LN10 / 2) * 100 - 15 + '%',
    left: left + '%',
    width,
    height,
    zIndex,
    transform,
    filter: `blur(${bottom * .075}px) grayscale(${bottom * .01}) brightness(${top * .01 + .4})`,
  }
  return (
    <div className={cj('pumpkin')} style={style}>
      <div className={cj('pumpkin--inner')}>
        <div className={cj('pumpkin__stem')} />
        <div className={cj('pumpkin__longitude pumpkin__longitude--1')} />
        <div className={cj('pumpkin__longitude pumpkin__longitude--2')} />
        <div className={cj('pumpkin__longitude pumpkin__longitude--3')} />
      </div>
    </div>
  )
}

export default Pumpkin
