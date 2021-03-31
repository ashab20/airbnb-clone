import styles from '../../styles/Footer.module.scss'
import { useState } from 'react'

const FooterData = [
  {
    Id: '0010100',
    name: 'About',
    LinksName: [
      'How Airbnb works',
      'Newsroom',
      'Investors',
      'Airbnb Plus',
      'Airbnb Luxe',
      'HotelTonight',
      'Airbnb for Work',
      'Made possible by Hosts',
      'Careers',
      "Founders' Letter",
    ],
  },
  {
    Id: '0020000',
    name: 'COMMUNITY',
    LinksName: [
      'Diversity & Belonging',
      'Against Discrimination',
      'Airbnb Associates',
      'Accessibility',
      'Frontline Stays',
      'Guest Referrals',
      'Gift cards',
      'Airbnb.org',
    ],
  },
  {
    Id: '1003000',
    name: 'HOST',
    LinksName: [
      'Host your home',
      'Host an Online Experience',
      'Host an Experience',
      'Responsible hosting',
      'Resource Center',
      'Community Center',
    ],
  },
  {
    Id: '1040000',
    name: 'SUPPORT',
    LinksName: [
      'Our COVID-19 Response',
      'Help Center',
      'Cancellation options',
      'Neighborhood Support',
      'Trust & Safety',
    ],
  },
]

function Footer() {
  const [SectionData] = useState(FooterData)
  
  

  return (
    <div className={styles.FooterSection}>
      {SectionData.map((FData) => {
        return (
          <div className={styles.FooterCard} key={FData.Id++}>
            <h1 key={FData.Id++} className={styles.FooterName}>{FData.name}</h1>
            <span className={styles.Links}>
                {FData.LinksName.map((L) => {
                            return (
                                <a key={FData.Id++} className={styles.FooterLink} href="#">{ L}</a>
                            );
                        })}
            
            </span>
          </div>
        )
      })}

      
    </div>
  )
}

export default Footer
