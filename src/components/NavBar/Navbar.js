import React from 'react';
import { CgMenuGridR } from 'react-icons/cg';
import { BsChevronDown } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import { BiErrorCircle } from 'react-icons/bi';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { ImUsers } from 'react-icons/im'
import { IoIosNotificationsOutline } from 'react-icons/io';
import { InputAdornment, TextField, IconButton, Avatar } from '@mui/material';
import styles from './Navbar.module.css';






const Navbar = () => {
  const links = ['Workspace', 'Recent', 'Starred', 'Templates']


  return (
    <>
      <div className={styles.container}>
        <div className={styles.nav}>
            <p> <CgMenuGridR />  </p>
            <p>  <b> Trello </b>  </p>

            { 
              links.map( (link, i) => <p key={i}> {link}<BsChevronDown style={{fontSize: '0.9em'}}/> </p> ) 
            }
            <p> Create </p>
        </div>
      
        <div className={styles.widget}>
          <TextField
            type='search'
            sx={{background: 'rgba(34, 126, 179, 0.5)', color: 'white', border: '1px solid whitesmoke', borderRadius: '5px'}}
            size='small'
            fullWidth
            placeholder="Search"
            InputProps={{ 
              startAdornment: 
                <InputAdornment position="start">
                  <FaSearch style={{color: "white"}} />
                </InputAdornment>
            }}
          />

          <IconButton sx={{color: 'white', '&:hover': { background: '#085480'}}}>
            <BiErrorCircle />
          </IconButton>

          <IconButton sx={{color: 'white', '&:hover': { background: '#085480'}}}>
            <IoIosNotificationsOutline />
          </IconButton>

          <Avatar sx={{color: 'darkblue'}}> 
            <b> QK </b>
          </Avatar>
        </div>
      </div>







      <div className={styles.horizontalBar}>
        <Avatar variant="rounded" sx={{background: 'white', color: '#004269;'}}>
          <ImUsers />
        </Avatar>

        <Avatar variant="rounded" sx={{background: 'transparent', color: 'white'}}>
          <AiOutlineDoubleRight />
        </Avatar>
      </div>
    </>
  )
}

export default Navbar





