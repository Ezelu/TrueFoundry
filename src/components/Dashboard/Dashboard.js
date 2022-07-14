import { useState, useEffect } from 'react';
import Header from './Header/Header';
import styles from './Dashboard.module.css';
import { data } from '../../utils/data';
import Card from '../Card/Card';
import { IconButton, TextField, Button } from '@mui/material';
import { GrFormClose } from 'react-icons/gr';
import { IoMdAdd } from 'react-icons/io';
import { v1 as uuidv1 } from 'uuid';







const Dashboard = () => {

  
  useEffect(() => {
    // If item already exists in localStorage, return without overwriting, else, update it
    if(localStorage.getItem('cardData')){
      return;
    }

    localStorage.setItem('cardData', JSON.stringify([...data]));
  }, []);


  const [cardData, setCardData] = useState(JSON.parse(localStorage.getItem('cardData')));  
  const [addAnother, setAddAnother] = useState(false);
  const [listTitle, setListTitle] = useState("");


  const createNewList = (e) => {
    // Prevent the form from submitting
    e.preventDefault();

    // Check if the text field is not empty
    if (!listTitle) {
      return;
    }

    // Generate a new list
    const newList = {
      id: uuidv1(),
      title: listTitle,
      tasks: []
    }

    // Update the database
    setCardData(prev => [...prev, newList]);

    // Update the localStorage
    const x = localStorage.getItem('cardData');
    localStorage.setItem('cardData', JSON.stringify(cardData))

    // Reset the form
    setAddAnother(false);
    setListTitle("")
  }





  return (
    <div className={styles.container}>
      <Header />

      <article>
        {
          cardData &&
          cardData.map( (card, i) => <Card card={card} setCardData={setCardData} cardData={cardData} key={i} /> )
        }



        <div className={styles.addAnotherList}>
          {
            !addAnother ?
            <button onClick={() => setAddAnother(true)} className={styles.btn}> <IoMdAdd /> Add Another List </button> :

            (
              <form method='get' onSubmit={(e) => createNewList(e)}>
              <TextField
                type='text'
                placeholder = "Enter list title..."
                size='small'
                fullWidth
                sx={{ marginBottom: '2%'}}
                required
                value={listTitle}
                onChange = {(e) => setListTitle(e.target.value)}
              />
    
              <Button type='submit' variant='contained' size='small'> Add Card </Button>
              <IconButton onClick={() => setAddAnother(false)}>
                <GrFormClose />
              </IconButton>
              </form>
            )
          }
        </div>
      </article>
    </div>
  )
}

export default Dashboard










