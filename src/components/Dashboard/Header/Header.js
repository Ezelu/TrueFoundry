import { FiStar } from 'react-icons/fi';
import { FaGlobeAfrica } from 'react-icons/fa';
import { Avatar, Divider } from '@mui/material';
import styles from './Header.module.css';






const Header = () => {
  return (
    <div className={styles.header}>
      <h2> Kanban Board </h2>
      <button> <FiStar /> </button>
      <button> <FaGlobeAfrica /> Public </button>
      <Avatar sx={{
        width: 30, 
        height: 30,
        color: 'black',
      }}>
        <small style={{fontSize: '0.7em'}}> AH </small> 
      </Avatar>
    </div>
  )
}

export default Header