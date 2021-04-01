import styles from '../../styles/About.module.scss'
import Link from 'next/link'
import Card from './Card'
function About() {
  return (
    <div className={styles.About}>
      <div className={styles.about_wrapper}>
        <h1 className={styles.title}>
          We stand with the Asian and Pacific Islander community Learn more
        </h1>
        <p className={styles.text}>
          We condemn racism, and denounce the violent acts that continue to
          happen to the Asian and Pacific Islander community. The number of
          anti-Asian hate crimes has alarmingly grown since the pandemic, and we
          call on our allies to join us in standing up to these injustices.
        </p>
        <Link href={{
          pathname: '/Searchpage',
          query: { datapss: "Great" }
        }}>
          <button className={styles.btn}>Learn more</button>
        </Link>
      </div>
      <div className={styles.live}>
        <h2 className={styles.title}>Live anywhere</h2>

        <Card />
      </div>

      <div className={styles.host}>
        <div className={styles.host_text}>
          <h2 className={styles.host_title}>
            Your world is <br /> worth sharing
          </h2>
          <p className={styles.host_p_text}>
            Turn your extra space into your next opertunity
          </p>
          <Link href="/Searchpage">
          <button className={styles.Host_btn}>Become a Host</button>
          </Link>
        </div>
        <img
          className={styles.host_img}
          src="https://a0.muscache.com/im/pictures/eff28e1d-51c4-49ff-8266-68d6929ea1ec.jpg?im_w=1680"
          alt="Become host"
        />
      </div>
    </div>
  )
}

export default About
