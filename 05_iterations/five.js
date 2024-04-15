const coding = ["js","Ruby","java","python","cpp"]

coding.forEach( function (value) { 
    // console.log(value);
} )

// coding.forEach( (items) => {
//     console.log(items);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
} )

const myCoding = [
    {
      LanguageName: "javascript",
      LanguageFileName: "js"  
    },
    {
        LanguageName: "java",
        LanguageFileName: "java"  
    },
    {
        LanguageName: "python",
        LanguageFileName: "py"  
    },
]

myCoding.forEach((item) => {
    console.log(item.LanguageName);
})

