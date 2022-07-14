import { v4 as uuidv4 } from 'uuid';
import { v1 as uuidv1} from 'uuid';


export const data = [
  {
    id: uuidv1(),
    title: 'To do',
    tasks: [
      {
        id: uuidv4(),
        title: {
          color: "#0079bf",
          title: "CP",
        },
        message: "Helpdesk Call AA999",
      },
      {
        id: uuidv4(),
        title: {
          color: "#0079bf",
          title: "CP",
        },
        message: "Helpdesk Call BB999",
      },
    ],
  },





  {
    id: uuidv1(),
    title: 'Development',
    tasks: [
      {
        id: uuidv4(),
        title: {
          color: "#eb5a46",
          title: "CP",
        },
        message: "Helpdesk Call CC999",
      },
      {
        id: uuidv4(),
        title: {
          color: "#0079bf",
          title: "EEP",
        },
        message: "Helpdesk Call BB999",
      },
    ],
  },





  {
    id: uuidv1(),
    title: 'Testing',
    tasks: [
      {
        id: uuidv4(),
        title: {
          color: "#eb5a46",
          title: "CP",
        },
        message: "Helpdesk Call DD999",
      },
    ],
  },




  {
    id: uuidv1(),
    title: 'Done',
    tasks: [
      {
        id: uuidv4(),
        title: {
          color: "#0079bf",
          title: "CP",
        },
        message: "Helpdesk Call FF999",
      },
      {
        id: uuidv4(),
        title: {
          color: "#eb5a46",
          title: "EEP",
        },
        message: "Helpdesk Call GG999",
      },
    ],
  },
]