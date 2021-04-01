import { useState } from 'react'
import styles from '../../styles/Navber.module.scss'
import SearchDate from './Search/Search'
import SearchIcon from '@material-ui/icons/Search'
import LanguageIcon from '@material-ui/icons/Language'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit'
import Link from 'next/link'
import { Avatar } from '@material-ui/core'
import { withRouter } from 'next/router'
import MapIcon from '@material-ui/icons/Map';


function Navber({key,...props}) {
  const [dataSearch,setDataSearch] = useState('')


  const [showOption, setShowOption] = useState(false)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const { router } = { ...props };
  
  const dataget = (router.query.datapss) ||(router.query.startdate);
  console.log(dataget);
  return (
    <>
      <div className={styles.header_wrpper} >
        <Link href="/">
          <img
            className={styles.header_icon}
            src={`Images/airbnb_full_icon.png` ? `Images/airbnb_full_icon.png`: `Images/sufit-icon.png`}
            alt="Airbob" onClick={() => setShowOption(false)}
          />
        </Link>

        {showOption && (
          <div className={styles.SearchDate}>
            
            <SearchDate/>
          </div>
        )}


        <div className={styles.header_center} >
         
          {dataget ?
            <div className={styles.header_center_map} onClick={() => setShowOption(!showOption)}>
              <h2> <MapIcon /> Open map</h2>
            </div> :
          <div
            className={styles.header_center_search}
            onClick={() => setShowOption(!showOption)}
          >
              <input className={ styles.header_center_Input} type="text" placeholder="Click and search ....."
              onChange={(e) => setDataSearch(e.target.value)} onClick={() => setShowOption(false)} />
              <Link
              href={{
                pathname: '/Searchpage',
                query: { datapss: "Great" }
              }} >

                 <SearchIcon type="submit" onSubmit="/Searchpage" className={styles.SearchIcon} />
             
            </Link>
          </div>
          }
          
          {
              (
               <div className={styles.header_center_option}>
               <ul className={styles.ul_link}>
                 <li className={styles.li_link}>
                   <a href="#" onClick={() => setShowOption(!showOption)}>Places to stay</a>
                 </li>
                 <li>
                   <a href="#Experience">Experiences</a>
                 </li>
                  <li style={{ gridColumn: 'span 2' }}>
                    <Link href="/Searchpage">
                      <a href="#">Online Experiences</a>
                    </Link>
                 </li>
               </ul>
             </div>)
          }
        </div>

        <div className={styles.header_right}
          onClick={() => setShowOption(false)}
        >
          <span className={styles.lang}>
            <p>Become a host</p>
            <LanguageIcon className={styles.Icons} />
          </span>
          {/* <ExpandMoreIcon /> */}
          <span className={styles.circle}>
            <HorizontalSplitIcon
              style={{
                fontSize: '2rem',
                fontWeight: '400',
                alignItems: 'center',
              }}
            />
            <Link href="/Login">
            <Avatar className={styles.avatar} />
            </Link>
          </span>
        </div>
      </div>
    </>
  )
}

SearchDate.getInitialProps = ({query}) => {
  return {query}
}


export default withRouter(Navber)
