const fs = require('fs');

module.exports = {
  get: (req, res) => {
    res.status(200).send(`successfully got`)
  },
  post: (req, res) => {
    console.log(req)
    // let { csv } = req.body
    // let csvString = csv;
    // console.log(csvString)
    fs.appendFile('csv_report.csv', 'firstName,lastName,county,city,role,sales' + "\n", 'utf8', (err) => {
      if (err) console.log(err);
      console.log('The cvs data was appended to file!');
    });
    fs.appendFile('csv_report.csv', 'firstName,lastName,county,city,role,sales' + "\n", 'utf8', (err) => {
      if (err) console.log(err);
      console.log('The cvs data was appended to file!');
    }); 
    res.status(201).send(`successfully added csv ${csv}`)
  }
}
