import React from 'react'
import {card} from '../assets'
import styles, {layout} from '../style'
import Button from './Button'

function CardDeal() {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Create a better life <br className='sm:block hidden' />
        in small steps</h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px] `}>Life is a combination of hppines and sorrow, it is
          freely your decisison to choose a path 
          and be consistent to your goal and to your self</p>
      < Button  styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img  src={card} alt='card' className='w-[100%]
        h-[100%]' />
      </div>
    </section>
  )
}

export default CardDeal
