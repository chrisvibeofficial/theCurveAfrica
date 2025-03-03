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

const http = require('http');
const port = 3030;

http.createServer((req, res) => {
  if (req.url == '/users' && req.method === 'GET') {
    res.writeHead(200, ('Content-Type', 'application/json'));
    res.end(JSON.stringify({
      allStudents: theCurve,
      totalStudents: theCurve.length
    }))
  } else if (req.url.startsWith('/users/') && req.method === 'GET') {
    const studentId = parseInt(req.url.split('/')[2]);
    const student = theCurve.find((e) => {
      return e.id === studentId;
    });

    if (!student) {
      return res.end('Student Not Found')
    }

    res.writeHead(200, ('Content-Type', 'application/json'));
    res.end(JSON.stringify({
      student: student
    }))
    // console.log(req.url.split('/')[2]);
  } else if (req.url == '/users' && req.method === 'POST') {
    res.writeHead(201, ('Content-Type', 'application/json'));
    let body = '';
    req.on('data', (chunks) => {
      body += chunks
    })
    req.on('end', () => {
      const newBody = JSON.parse(body)
      newBody.id = theCurve.length + 1;
      theCurve.push(newBody);

      res.end(JSON.stringify({
        message: 'new studend created',
        newStudent: newBody
      }))
    })
  } else if (req.url.startsWith('/users/') && req.method === 'PUT') {
    const studentId = parseInt(req.url.split('/')[2]);
    const studend = theCurve.find((e) => {
      return e.id === studentId
    })
    let body = '';
    req.on('data', (chunks) => {
      body += chunks
    });
    req.on('end', () => {
      const newBody = JSON.parse(body);
      newBody.id = theCurve.length + 1

      if (studend == 0) {
        res.writeHead(404, ('Content-Type', 'application/json'))
        return res.end(JSON.stringify({
          message: 'Student Not Found'
        }))
      }

      Object.assign(studend, newBody)
      res.writeHead(200, ('Content-Type', 'application/json'));
      res.end(JSON.stringify({
        message: 'Student Updated Successfully',
        updatedStudent: newBody
      }))
    })
  } else if (req.url.startsWith('/users/') && req.method === 'DELETE') {
    studentId = parseInt(req.url.split('/')[2]);
    studend = theCurve.find((e) => {
      return e.id === studentId
    })

    if (!studend) {
      res.writeHead(404, ('Content-type', 'application/json'));
      return res.end(JSON.stringify({
        message: 'Student Not Found'
      }))
    }

    const remainingStudent = theCurve.splice(studend, 1);
    res.writeHead(200, ('Content-Type', 'application/json'));
    res.end(JSON.stringify({
      message: 'Student Deleted Successfully',
      allStudents: remainingStudent
    }))
  }
}).listen(port, () => {
  console.log(`Running on port ${port}`);
})