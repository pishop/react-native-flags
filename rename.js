const fs = require('fs');

fs.readdir('./flags/48', (err, files) => {
    files.forEach(file => {
        const newFile = (file.replace(new RegExp(/^(.*)@3x(.png)$/), "$1$2"));
        console.log(newFile);
        fs.rename('./flags/48/'+file, './flags/48/'+newFile, (err)=>console.log(err));
    });
});