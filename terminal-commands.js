const fs = require('fs');


module.exports.ls = () => {
  fs.readdir('./',(err,files)=> {
    const filesToString = files.reduce((acc,file)=> {
      return `${acc} ${file}`;
    }, '');

    console.log(filesToString);
  });

};

module.exports.touch = () => {
  fs.writeFile('newfile.txt', 'I just created a new file in node!', (err) => {
    if (err) {
      consle.log(err.message)
    } else {
      console.log("File created!")
    }
  })
};

module.exports.mkdir = () => {
  fs.mkdir('directory', (err)=>{
    if (err) {
      console.log(err.message)
    }
    else {
      console.log("Directory created")
    }
  })
}
