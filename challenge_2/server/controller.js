const fs = require('fs');

module.exports = {
  get: (req, res) => {
    res.status(200).send(`successfully got`)
  },
  post: (req, res) => {
    let { text } = req.body
    fs.appendFile('csv_report.csv', 'firstName,lastName,county,city,role,sales' + "\n", 'utf8', (err) => {
      if (err) console.log(err);
      console.log('The cvs data was appended to file!');
    });
    let output = "";
    const recursive = (child) => {
      let line = "";
      for (let key in child) {
        if (typeof child[key] === "string" || typeof child[key] === "number") {
          line += child[key] + ",";
        }
      }
      output += line.slice(0, -1) + "\n";
      if (child.children.length > 0) {
        for (let i = 0; i < child.children.length; i++) {
          recursive(child.children[i]);
        }
      }
    }
    recursive(text);
    fs.appendFile('csv_report.csv', output, 'utf8', (err) => {
      if (err) console.log(err);
      console.log('The cvs data was appended to file!', output);
    });
    res.status(201).send(`successfully added csv`)
  }
}
