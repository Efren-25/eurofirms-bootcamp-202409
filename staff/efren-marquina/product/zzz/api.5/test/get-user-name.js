    fetch('http://localhost:8080/users/6771881059f1e375bfafa76f/name', {
        method: 'GET',
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzcxODgxMDU5ZjFlMzc1YmZhZmE3NmYiLCJpYXQiOjE3MzU1Mzc5NTR9.BRCukmXxYMBL5oztKdjbFlo1A5Ob9LF1gRPQnshFvX4'
        }
    })
        .then(response => {
            console.log(response.status)
    
            return response.text()
        })
        .then(body => console.log(body))
        .catch(error => console.error(error))