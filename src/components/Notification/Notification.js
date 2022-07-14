import { FcGlobe, fcGlobe } from 'react-icons/fc';
import { VscChromeClose } from 'react-icons/vsc'
import styles from './Notification.module.css';


const Notification = () => {





  return (
    <div className={styles.container}>
      <p className={styles.main_text}>
        <FcGlobe />
        &nbsp; <b> <small> 
          This board is set to public. Board admins can change its visibility setting at any time. 
        </small> </b>  &nbsp;
        <a href="#"> Learn more here </a> 
      </p>

      <p className={styles.closebtn}> <VscChromeClose /> </p>
    </div>
  )
}

export default Notification