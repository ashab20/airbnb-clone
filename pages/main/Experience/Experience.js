import { useState } from 'react'
import styles from '../../../styles/Experience.module.scss'

const Experiences = [
  {
    Id: '001',
    ImgUrl:
      'https://a0.muscache.com/im/pictures/4d353c80-e73a-4b04-9e15-ec3d8381b106.jpg?im_w=320',
    title: 'Online Experience',
    text: 'Travel the world without leaving home',
  },
  {
    Id: '0002',
    ImgUrl:
      'https://a0.muscache.com/im/pictures/e81fce5f-2f51-4342-938e-5bc18ae237f4.jpg?im_w=320',
    title: 'Experience',
    text: 'Thing to do wathever you are',
  },
  {
    Id: '0003',
    ImgUrl:
      'https://a0.muscache.com/im/pictures/b9adfc39-6e2a-4e5f-b6f3-681b306fae5c.jpg?im_w=320',
    title: 'Adventures',
    text: 'Multi-day trps with meals and stays',
  },
]

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
