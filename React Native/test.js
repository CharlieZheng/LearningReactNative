fetch('https://raw.githubusercontent.com/CharlieZheng/CharlieZheng.github.io/master/content.json', {
    method: 'GET'}).then((yes)=>{console.log(yes)}).catch((no)=>{console.log(no)})