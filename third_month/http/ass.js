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

const http = require('http');
const port = 8080;

http.createServer((req, res) => {
  // For All Students
  const search = req.url.toLowerCase();
  if (search === '/allstudents' && req.method === 'GET') {
    res.writeHead(200, ('Content-Type', 'application/json'));
    res.end(JSON.stringify({
      allStudents: backEnd,
      totalStudent: backEnd.length
    }))
  }
  // For One Student With ID
  else if (search.startsWith('/allstudents/') && req.method === 'GET' && !isNaN(req.url.split('/').at(2))) {
    const id = parseInt(req.url.split('/').at(2))

    res.writeHead(200, ('Content-Type', 'application/json'));
    res.end(JSON.stringify({
      student: backEnd.find((x) => {
        return x.id == id
      })
    }))
    // console.log('number',(req.url).split('/'));
  }
  // For One Student With Name
  else if (search.startsWith('/allstudents/') && req.method === 'GET') {
    const name = req.url.split('/').at(2).toLowerCase();

    res.writeHead(200, ('Content-Type', 'application/json'));
    res.end(JSON.stringify({
      student: backEnd.find((x) => {
        return x.name.toLowerCase() == name
      })
    }))
    // console.log('string',(req.url).split('/'));
  }
  // Creating New Student
  else if (search.startsWith('/createstudent') && req.method === 'POST') {
    res.writeHead(201, ('Content-Type', 'application/json'));
    let body = '';
    req.on('data', (chunks) => {
      body += chunks;
    });
    req.on('end', () => {
      let newBody=  JSON.parse(body)
      newBody.id = backEnd.length+1
      backEnd.push(newBody)
      res.end("new student created successfully")
    })
  }
  // Editing Student
  else if (search.startsWith('/allstudent/') && req.method === 'PUT') {
    let body = '';
    const userId = req.url.split('/')[2];
    const findUser = backEnd.find((e) => e.id === parseInt(userId));
  
    req.on('data', (chunks) => {
      body += chunks;
    });
  
    req.on('end', () => {
      if (findUser) {
        Object.assign(findUser, JSON.parse(body));
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end("Student updated successfully");
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: "Student not found" }));
      }
    });
  }
  
  
  
}).listen(port, () => {
  console.log(`You're running on ${port} server`);
})