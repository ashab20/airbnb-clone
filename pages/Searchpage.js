import React, { useState } from 'react'
import style from '../styles/Searchpage.module.scss'
import Navber from './Navbar/Navber'
import Footer from './Footer/Footer'
import SearchIcon from '@material-ui/icons/Search'
import styles from '../styles/Home.module.scss'
import Head from 'next/head'
import Searchresult from './Searchresult/Searchresult'
import { withRouter } from 'next/router'
import JSONDATA from './Searchresult/searchData.json'



const Searchpage = ({key,...props}) => {
  // const [searchData, setSeaechdata] = useState(Data);
  const [searchData, setSearchdata] = useState('');
  // const [loadData,setLoadData] = useState('')
  // const [dataSearch,setDataSearch] = useState('')


  const { router } = { ...props };



  const SearchFilter = JSONDATA.filter((data) => {
    if (searchData == "") {
      return data;
    } else if (data.title.toLowerCase().includes(searchData.toLowerCase())) {
      return data;
    }
  })

  const datSelect = (router.query.day);

  return (
    <div className={styles.container}>
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={`${styles.header}`}>
        <Navber/>
      </header>
      <main className={styles.main}>
        <section className={style.Searchpage}>
          <div className={style.Searchpage_input_box}>

            <input className={style.Searchpage_input} type="text" placeholder="Start you Search" onChange={(e) => setSearchdata(e.target.value)} />
            
            <SearchIcon type="submit"
              className={style.SearchpageIcon} />
          </div>

          <p className={style.Searchpage_text} >{JSONDATA.length} stays.  {router.query.startdate} - {router.query.enddate} - {datSelect }Days</p>
          

          <h3 className={style.Searchpage_title}>Stays in selected map area</h3>
          <div className={style.search_page_option}>
            <button className={style.search_page_option_btn}>
              Cancellation flexibikity
            </button>
            <button className={style.search_page_option_btn}>
              Type of place
            </button>
            <button className={style.search_page_option_btn}>Price</button>
            <button className={style.search_page_option_btn}>
              Instant Book
            </button>
            <button className={style.search_page_option_btn}>
              More Filters
            </button>
          </div>

          {/* Searchresult*/}
          <div className={style.Searchresult_contain}>
            {SearchFilter.map((data) => {
              return (
                <Searchresult
                  Id={data.Id}
                  img={data.img}
                  location={data.location}
                  title={data.title}
                  star={data.star}
                  description={data.description}
                  price={data.price}
                  time={data.time}
                  total={data.total}
                  day={ datSelect}
                />
              )
            })}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <Footer />
       <p style={ {fontSize:"1.6rem",margin:"auto",textAlign:"center",padding:".7rem",background:"whitesmoke",color:"#222222"}}> &copy; 2020 airbnd clone! no right reserve || this is a demo || redesign by Ashab Uddin  ||<strong>Power By</strong>  <a href="https://sufit.net/"><img
          style={{position:"relative",padding:".5rem 0 0 .8rem",bottom:"0"}}
          src="./Images/sufit-icon.png" width="80px" height="30px"
          alt="Sufit"
          /></a> </p>
      </footer>
    </div>
  )
}

export default withRouter(Searchpage)
