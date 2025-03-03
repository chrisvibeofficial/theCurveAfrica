const theCurve = [
  {
    id: 1,
    name: 'Christopher',
    gender: 'Male',
    stack: 'Backend'
  },
  {
    id: 2,
    name: 'Mary',
    gender: 'Female',
    stack: 'Product Design'
  },
  {
    id: 3,
    name: 'Chinasa',
    gender: 'Female',
    stack: 'Backend'
  },
  {
    id: 4,
    name: 'Christian',
    gender: 'Male',
    stack: 'Frontend'
  },
  {
    id: 5,
    name: 'Michael',
    gender: 'Male',
    stack: 'Product Design'
  },
  {
    id: 6,
    name: 'Edith',
    gender: 'Female',
    stack: 'Frontend'
  },
]

const express = require('express');
const app = express();
const port = 2020;
app.use(express.json());

app.get('/users', (req, res) => {
  res.status(200).json({
    allStudents: theCurve,
    totalStudents : theCurve.length
  })
});

app.get('/users/:id', (req, res) => {  
  const studentId = theCurve.find((e) => {
    return e.id === parseInt(req.params.id)
  }) 

  if (!studentId) {
    return res.status(404).json('Student Not Found')
  }

  res.status(200).json({
    student : studentId
  
  })
});

app.post('/users/', (req, res) => {
  const newStudent = req.body;
  newStudent.id = theCurve.length + 1
  theCurve.push(newStudent)

  res.status(201).json({
    message : 'new student created successfully',
    allStudents : newStudent
  })
});

app.put('/users/:id', (req, res) => {
  const id = req.params.id;
  const updated = req.body;
  const studentId = theCurve.find((e) => {
    return e.id == id
  });

  if (!studentId) {
    return res.status(404).json('Student Not Found');
  }

  Object.assign(studentId, updated);
  res.status(200).json({
    message: 'student updated successfully',
    updated
  });
});

app.delete('/users/:id', (req, res) => {
  const id = req.params.id;
  const studentId = theCurve.find((e) => {
    return e.id == id
  });

  if (!studentId) {
    return res.status(404).json('Student Not Found');
  }

  const deletedStudent = theCurve.filter((e) => {
    return e !== studentId
  });
  res.status(200).json({
    message : 'student deleted successfully',
    deletedStudent
  })
})

app.listen(port, () => {
  console.log(`Reunning on port ${port}`);
})