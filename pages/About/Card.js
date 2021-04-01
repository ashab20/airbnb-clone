import styles from '../../styles/About.module.scss'
import { useState } from 'react'
import CardName from './Card.json'

function Cardhome() {
  const [CardFind] = useState(CardName)

  return (
    <div className={styles.Card}>
      {CardFind.map(({ Id, ImgName, ImgUrl }) => {
        return (
          
            <div key={Id++} className={styles.Card_wrapper}>
              <img className={styles.Card_image}
                key={ Id++}  src={ImgUrl} alt={ImgName} />
              <h3 className={styles.Card_title} key={Id++}>
                {ImgName}
              </h3>
            </div>
          
        )
      })}
    </div>
  )
}

export default Cardhome
