import styles from '../../../styles/Banner.module.scss'


function Banner() {
    return (
            
        <div className={styles.Banner}>
            
            <img className={styles.bannerImage} src="https://a0.muscache.com/im/pictures/166791ff-bc82-4b88-ba3d-49be1d462dce.jpg?im_w=2560" alt="" />

            <h2 className={styles.Title}>Made Possible By hosts</h2>
        </div>
        
    )
}

export default Banner
