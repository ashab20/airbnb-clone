import styles from '../../../styles/Banner.module.scss'


function Banner() {
    return (
            
        <div className={styles.Banner}>
            
            <img className={styles.bannerImage} src="Images/banner_airbnb.webp" alt="" />

            <h2 className={styles.Title}>Made Possible By hosts</h2>
        </div>
        
    )
}

export default Banner
