import { useState } from 'react'
import styles from '../../../styles/Experience.module.scss'
import Experiences from './Experiences.json' 

function Experience() {
  const [ExperiencesData] = useState(Experiences)

  return (
    <div className={styles.Experience}>
      <h2 className={styles.title}>Experience the world</h2>
      <p className={styles.text}>
        Unique activities with local experts—in person or online.
      </p>
      <div className={styles.exCard_box}>
        {ExperiencesData.map((experience) => {
          return (
            <div className={styles.ImgBox} key={experience.Id++}>
              <img
                className={styles.img}
                key={experience.Id++}
                src={experience.ImgUrl}
                alt={experience.title}
              />
              <h3 key={experience.Id++} className={styles.img_title}>
                {experience.title}
              </h3>
              <p key={experience.Id++} className={styles.img_text}>
                {experience.text}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Experience
