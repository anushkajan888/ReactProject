import React from 'react'
import styles from '../style'
import Button from './Button'

function CTA() {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY}
    ${styles.padding} sm:flex-row flex-col
    bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
      <h3 className={`${styles.heading2}`}>Let's try our service out</h3>
      <p className={`${styles.paragraph}`}>This is the part when we do not
        have predefined text, but we figured something out
      </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0
      sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  )
}

export default CTA
