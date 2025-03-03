// const fs = require('fs');
// fs.writeFile('./create.txt', 'My name is Zainab', 'utf-8', (err, data) => {
//   if (err) {
//     console.log('Error writing file', err);
//   }else {
//     console.log('Writing successful');
//   }
// })

// fs.unlink('./create.txt', (err, data) => {
//   if (err) {
//     console.log('Error writing file', err);
//   }else {
//     console.log('Deleting file successful');
//   }
// }) 


// const http = require('http');
// const port = 8080;

// http.createServer((req, res) => {
//   fs.readFile('./signIn.html', 'utf-8', (err, data) => {
//     if (err) {
//       res.writeHead(404, ('Content-Type', 'text/html'));
//       res.end('Page not found')
//     }else {
//       res.writeHead(200, ('Content-Type', 'text/html'));
//       res.end(data)
//     }
//   })
// }).listen(port, () => {
//   console.log(`Running on ${port} server`);
// })

// const age = 20

// if (age > 21) {
//   console.log('correct');
// }else {
//   console.log('incorrect');
// }


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
const port = 1212;
app.use(express.json());
// const url = '/allStudents';

// Get all Students
app.get('/allStudents', (req, res) => {

  // if (!url) {
  //   return res.status(404).json('Invalid URL')
  // }

  res.status(200).json({
    message : 'List of all students',
    allStudents : theCurve,
    totalStudents : theCurve.length
  })
});

// Get one Student
app.get('/allStudents/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const studentId = theCurve.filter((e) => {
    return e.id === id
  });

  if (!studentId) {
    return res.status(404).json('Student not found');
  }

  res.status(200).json({
    student : studentId
  })
})

// Create a Student
app.post('/allStudents', (req, res) => {
  const newStudent = req.body;
  newStudent.id = theCurve.length + 1;
  theCurve.push(newStudent);
  
  res.status(201).json({
    message : 'new student created successfully',
    student : newStudent,
  })
});

// Create a Student
app.put('/allStudents/:id', (req,res) => {
  const update = req.body;
  const id = parseInt(req.params.id);
  const studentId = theCurve.filter((e) => {
    return e.id === id;
  });

  if (!studentId) {
    return res.status(404).json('Student not found');
  }

  Object.assign(studentId, update);
  res.status(200).json({
    message : 'Student updated successfully',
    updatedStudent : studentId
  })
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
})



const http = require('http');
const Port = 1313;

http.createServer((req, res) => {
  if (req.url === '/allStudents' && req.method === 'GET') {
    res.writeHead(200, ('Content-Type', 'application/json'));
    res.end(JSON.stringify({
      message : 'List od all Students',
      allStudents : theCurve,
      totalStudents : theCurve.length
    }))

    // if (req.url !== '/allStudents') {
    //   res.writeHead(404, ('Content-Type', 'application/json'));
    //   return res.end(JSON.stringify('INVALID URL'))
    // }
  }else if (req.url.startsWith('/allStudents/')) {
    const id = parseInt(req.url.split('/')[2]);
    const studentId = theCurve.filter((e) => {
      return e.id === id
    })

    if (!studentId) {
      res.writeHead(404, ('Content-Type', 'application/json'));
      return res.end('Student not found')
    }

    res.writeHead(202, ('Content-Type', 'application/json'));
    res.end(JSON.stringify({
      student : studentId
    }))
  }
}).listen(Port, () => {
  console.log(`Running on port ${Port}`);
  
})