const backEnd = [
    {
    id: 1,
    name: 'Chinasa',
    sex: 'Male',
    isMarried: true
  },
  {
    id: 2,
    name: 'Zainab',
    sex: 'Male',
    isMarried: true
  },
  {
    id: 3,
    name: 'Echobe',
    sex: 'Female',
    isMarried: false
  },
  {
    id: 4,
    name: 'Sango',
    sex: 'Female',
    isMarried: true
  },
  {
    id:5,
    name: 'Mercy',
    sex: 'Male',
    isMarried: false
  }
]

const express = require('express');
const app = express()
app.use(express.json())
const port = 7070;

// GET all students
app.get('/allStudents', (req, res) => {
  res.status(200).json({
    allSudents : backEnd
  })
});

// GET one student
app.get('/allStudents/:id', (req, res) => {
  const findStudend = backEnd.filter((e) => {
    return e.id == req.params.id
  })

  if (findStudend.length == 0) {
    return res.status(404).json('Student Not Found')
  }
  
  res.status(200).json({
    message : 'Check student below',
    findStudend
  })
})

// POST method
app.post('/createStudent', (req, res) => {
  res.status(201);
  const newStudent = req.body;
  newStudent.id = backEnd.length + 1;
  backEnd.push(newStudent);

  res.json({
    message : 'new student created successfully',
    newStudent
  })
})
// PUT
app.put('/updateStudent/:id', (req,res) => {
   const id = req.params.id;
   const updatedStudent = req.body;
   const student = backEnd.find((e) => {
    return e.id == id
   })
   
   if (!student) {
    return res.status(404).json('Student Not Found')
   }
   
   Object.assign(student, updatedStudent)

   res.status(200).json({
    message : 'student updated successfully',
    updatedStudent
   })

})

app.listen(port, () => {
  console.log(`You are running on port ${port}`);
})