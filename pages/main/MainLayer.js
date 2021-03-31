import Style from '../../styles/Navber.module.scss'
import styles from '../../styles/Mainlayer.module.scss';
import Banner from './Banner/Banner'
import Navbar from '../Navbar/Navber'
import SearchIcon from '@material-ui/icons/Search'
import LanguageIcon from '@material-ui/icons/Language'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit'
import { Avatar } from '@material-ui/core'

function MainLayer() {
  return (
    <div clssName={styles.MainLayer}>
      

      <Banner />
    </div>
  )
}
export default MainLayer
