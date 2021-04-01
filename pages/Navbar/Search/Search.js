import { useState } from 'react'
import styles from '../../../styles/Navber.module.scss'
import  '../../../styles/Navber.module.scss'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

import { Button } from '@material-ui/core'
import PeopleIcon from '@material-ui/icons/People'
import Link from 'next/link'


function SearchDate({ close}) {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())


 

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
    // focused: null,
    autoFocus: true,
    showDateDisplay: "displayDate",
    scroll: true,
    
    
  }

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }
  console.log(startDate);
  let startpickup = startDate.toString().slice(3,15)
  let endpickup = endDate.toString().slice(3, 15)
  

  const dateCount = (Math.abs(parseInt(startDate.toString().slice(8, 15), 10)-parseInt(endDate.toString().slice(8, 15), 10)));


  return (
    <div className={styles.DateContent}>
      <DateRangePicker
       
        className="DatePicker"
        ranges={[selectionRange]}
        onChange={handleSelect}
        // onDatesChange={({ startDate, endDate }) => handleSelect({ startDate, endDate })} 
        focusedInput={selectionRange.focused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={(focusedInput) => handleSelect({ focused:focusedInput })} // PropTypes.func.isRequired,
      />

      <div className={styles.DateInp}>
        {/* <h2 className={styles.DateInp_h2}>
          
          <PeopleIcon className={styles.DateInp_people} />
        </h2> */}
        <input
          className={styles.DateInp_input}
          min={0}
          defaultValue={2}
          type="number"
        />
        <Link href={{ pathname: '/Searchpage', query: { startdate: startpickup,enddate: endpickup,day:dateCount}}}  dateStart={startpickup} dateEnd={endpickup }>
        <Button className={styles.DateInp_btn}>
            Search AIRBNB
        </Button>
          </Link>
        <Button className={styles.DateInp_btn} onClick={ close}>Close</Button>
      </div>
    </div>
  )
}
SearchDate.getInitialProps = ({query}) => {
  return {query}
}


// href={`/Searchpage?startdate=${startpickup}&enddate=${endpickup}`}
export default SearchDate

