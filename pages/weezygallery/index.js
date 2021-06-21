import Image from 'next/image'
import Link from 'next/link'
import WeezyCaption from './weezycaption'
import styles from '../../styles/WeezyGallery.module.css'
import weezy_1 from '../../public/weez/weezy_1.jpg'
import weezy_2 from '../../public/weez/weezy_2.jpg'
import weezy_3 from '../../public/weez/weezy_3.jpg'
import weezy_4 from '../../public/weez/weezy_4.jpg'
import weezy_5 from '../../public/weez/weezy_5.jpg'
import weezy_6 from '../../public/weez/weezy_6.jpg'
import weezy_7 from '../../public/weez/weezy_7.jpg'

export default function WeezyGallery() {
  return (
    <div className={styles.container}>
      <h6 className={styles.weezyheader}>cool this is weezy</h6>

      <div className={styles.weezyimage}>
        <Image src={weezy_1} alt="weezy likes to drive a car"/>
        <WeezyCaption caption="weezy likes to drive a car" />
      </div>
      <div className={styles.weezyimage}>
        <Image src={weezy_2} alt="weezy is sponsored by coca cola"/>
        <WeezyCaption caption="weezy is sponsored by coca cola" />
      </div>
      <div className={styles.weezyimage}>
        <Image src={weezy_3} alt="weezy enjoys being scritched - still sponsored"/>
        <WeezyCaption caption="weezy enjoys being scritched - still sponsored"/>
      </div>
      <div className={styles.weezyimage}>
        <Image src={weezy_4} alt="weezy turnt af on friday night"/>
        <WeezyCaption caption="weezy turnt af on friday night"/>
      </div>
      <div className={styles.weezyimage}>
        <Image src={weezy_5} alt="weezy appreciating folded laundry"/>
        <WeezyCaption caption="weezy appreciating folded laundry"/>
      </div>
      <div className={styles.weezyimage}>
        <Image src={weezy_6} alt="weezy enjoying being a small dog"/>
        <WeezyCaption caption="weezy enjoying being a small dog"/>
      </div>
      <div className={styles.weezyimage}>
        <Image src={weezy_7} alt="weezy expressing anger about society"/>
        <WeezyCaption caption="weezy expressing anger about society"/>
      </div>
      <footer className={styles.footer}>
        <Link href="/">
          <a className="">back home</a>
        </Link>
      </footer>
    </div>
  )
}
