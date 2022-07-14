
import React, { useState, useEffect } from 'react';
import styles from './Card.module.css';
import { IconButton, Button } from '@mui/material';
import { MdMoreHoriz } from 'react-icons/md';
import { TextField } from '@mui/material';
import { GrFormClose } from 'react-icons/gr';
import { IoMdAdd } from 'react-icons/io';
import { v4 as uuidv4} from 'uuid';
import { ReactSortable } from 'react-sortablejs'






const Card = ({ card, setCardData, cardData }) => {

  const [addTask, setAddTask] = useState(false);
  const [taskMessage, setTaskMessage] = useState("");
  const id = card.id;

  const createNewCard = (e) => {
    // Stop the form from submitting
    e.preventDefault();

    // Check if the text field is not empty
    if (!taskMessage) {
      return;
    }

    //Create a new card
    const newCard = {
      id: uuidv4(),
      message: taskMessage
    }

    // Filter the database to get the selected parent
    let parentTask = cardData.filter(each => each.id === id);

    // Update the tasks of the parent element
    parentTask[0].tasks = [...parentTask[0].tasks, newCard];

    // Update the localStorage
    localStorage.setItem('cardData', JSON.stringify(cardData))

    // Reset the form
    setTaskMessage('');
    setAddTask(false);
  }


  const [state, setState] = useState([...card.tasks]);

  useEffect(() => {
    setState([...card.tasks])
  }, [card.tasks])
  


  return (
    <div className={styles.box}>
      <div className={styles.title}>
        <h3> {card.title}  </h3>
        <IconButton>
          <MdMoreHoriz />
        </IconButton>
      </div>

      <div className={styles.slate}>
        {
          card.tasks &&

          <ReactSortable list={state} setList={setState} group="shared">
            {     
              state.map((each) => {
              return (
                <aside key={each.id} draggable='true'>
                  { each.title && <span style={{ background: each.title.color }}></span>}
                  <p> {each.message} </p>
                </aside>
              )
            })
            }
          </ReactSortable>
        }
      </div>



      <div className={styles.addTask}>
        {
          !addTask ? 
          <button className={styles.addBtn} onClick={() => setAddTask(true)}> <IoMdAdd /> Add a card </button> : 
          (
            <form method='get'>
            <TextField
              type='text'
              placeholder = "Enter a title for this card"
              size='small'
              fullWidth
              sx={{ marginBottom: '2%'}}
              required
              value={taskMessage}
              onChange = {(e) => setTaskMessage(e.target.value)}
            />
  
            <Button type='submit' variant='contained' size='small' onClick={ (e) => createNewCard(e) }> Add Card </Button>
            <IconButton onClick={() => setAddTask(false)}>
              <GrFormClose />
            </IconButton>
            </form>
          )
        }
      </div>

    </div>
  )
}

export default Card
















