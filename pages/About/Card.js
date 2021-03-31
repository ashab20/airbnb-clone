import styles from '../../styles/About.module.scss'
import { useState } from 'react'

const CardName = [
  {
    Id: "00140",
    ImgUrl: './Images/enteir.webp',
    ImgName: 'Entire Homes',
  },
  {
    Id: "02100",
    ImgUrl: './Images/pic2.webp',
    ImgName: 'Unique stays',
  },
  {
    Id: "000310",
    ImgUrl: './Images/pic3.webp',
    ImgName: 'Cabins and cottages',
  },
  {
    Id: "0100400",
    ImgUrl: './Images/pic4.webp',
    ImgName: 'Pets allowed',
  },
]

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
