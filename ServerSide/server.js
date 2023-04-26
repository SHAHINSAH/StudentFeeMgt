const express = require('express');
const app = express();

app.get('/api/students/balance-fees', (req, res) => {
    const balanceFees = [
        {
            "name": "Shahinsah kumar",
            "id": "1234",
            "dateOfJoin": "2021-09-01",
            "teacherName": "Manmohan",
            "balanceFee": 5000
        },
        {
            "name": "Rajesh k",
            "id": "5678",
            "dateOfJoin": "2021-09-01",
            "teacherName": "Divya",
            "balanceFee": 10000
        }
    ];
    res.json(balanceFees);
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
