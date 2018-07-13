newArray = []
str = 'QWEWW2EEW'
for(let i = 0; i < str.length; i++) {
    // if(!isDigit(str[i])) {
      newArray.unshift(str[i])
    // }
}
return console.log(newArray)
