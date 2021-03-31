import styles from '../../styles/Searchresult.module.scss'
import FavoriteBorderIcons from '@material-ui/icons/FavoriteBorder'
import Star from '@material-ui/icons/Star';

function Searchresult({
    Id,
    img,
    location,
    title,
    description,
    star,
    time,
    price,
    total,
    day
}) {
    return <div key={ Id} className={styles.Searchresult}>
        <img
            className={styles.Searchresult_img}
            
            src={img} alt={title} />
        <div className={styles.Searchresult_info}>

            <div className={styles.Searchresult_info_top}>
                <p>{ location}</p>
                <h3 className={ styles.Searchresult_title}>{title}</h3>
                <p className={styles.Searchresult_line}>
                    -----
                </p>

            </div>
            <p className={ styles.description}>{ description}</p>
            <div className={ styles.Searchresult_heart}>
                <FavoriteBorderIcons/>
            </div>
            {/* <div className={styles.Searchresult_info_bottom}> */}
            <div className={styles.Searchresult_star}>
                    <Star className={ styles.Searchresult_star_tag}/>
                    <p className={ styles.Searchresult_star_p}>
                        <strong>{ star}</strong>
                    </p>
            </div>
            <div className={styles.Searchresult_price}>
                    <h2>{price}/ <span className={styles.Searchresult_price_time }>{time}</span></h2>
                    <p className={styles.Searchresult_price_P }>${ total * day}/Total</p>
                </div>
            {/* </div> */}
        </div>
        </div>
}

export default Searchresult
