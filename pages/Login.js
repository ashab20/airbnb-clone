import Head from 'next/head'
import Footer from './Footer/Footer'
import Navber from './Navbar/Navber'
import styles from '../styles/Home.module.scss';
import style from '../styles/Login.module.scss'



function Login() {



    return (
    <div className={style.container}>
        <Head>
          <title>Login</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className={`${styles.header}`}>
          <Navber/>          
        </header>
        <main className={style.main}>
            <from action="" method="post">
            <div className={ style.from_controller}>
              <h2 className={ style.login_title}>Login</h2>
                
              <label className={ style.from_control} for="uname"><b>Username :</b></label>
                <input className={ style.from_control_input}  type="text" placeholder="Enter Username" name="uname" required/>

                <label className={ style.from_control}  for="psw"><b>Password :</b></label>
                <input className={ style.from_control_input}   type="password" placeholder="Enter Password" name="psw" required/>

              <button className={ style.login_btn} type="submit" >Login</button>
                <label>
                <input type="checkbox" checked="checked" name="remember"/> Remember me
                </label>
            </div>

            <div className={style.from_indicator}>
                <button type="button" className={style.cancelbtn} >Cancel</button>
                <span className={style.psw}>Forgot <a href="#">password?</a></span>
            </div>
            </from> 

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

export default Login
