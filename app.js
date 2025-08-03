const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

const posts = [
  {
    title: 'Mare',
    content: 'Una domenica al mare con la famiglia',
    img: 'imgs/mare.jpeg',
    tags: ['#mare', '#famiglia', '#domenica']
  },
  {
    title: 'Montagna',
    content: 'Un weekend in montagna con gli amici',
    img: 'imgs/montagna.jpeg',
    tags: ['#montagna', '#amici', '#ubriachi']
  },
  {
    title: 'Piscina',
    content: 'Abbiamo finalmente finito la nostra nuova piscina, vi piace?',
    img: 'imgs/piscina.jpeg',
    tags: ['#piscina', '#sudore', '#mesi']
  },
  {
    title: 'Natale',
    content: 'Un Natale al nord con tutta la famiglia',
    img: 'imgs/natale.jpeg',
    tags: ['#natale', '#strapieno', '#parenti']
  },
  {
    title: 'Capodanno',
    content: 'Buon anno!!!',
    img: 'imgs/capodanno.jpeg',
    tags: ['#newyear', '#2025', '#annobuono']
  },
]

app.get('/', (req, res) => {
  res.send('Server del mio blog')
})

app.get('/bacheca', (req, res) => {
  res.json(posts)
})

app.listen((port), () => {
  console.log(`Server in ascolto alla porta ${port}`);
})