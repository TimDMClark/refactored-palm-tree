// Practice One
var cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"]

for(let i = 0; i < cohortOneStudents.length; i++) {
    // console.log(cohortOneStudents[i])
};

// Practice Two
const interests = ['video games', 'scary movies', 'sleeping', 'music', 'being a dad'];

for(let j = 0; j < interests.length; j++) {
    // console.log(` One of my interests is: ${interests[j]}`)
};

// Practice Three
for(let j = 0; j < interests.length; j++) {
    if ('being a dad' === interests[j]){
        console.log(`One of my favorite interests is ${interests[j]}`)
    } else {
         console.log(`One of my interests is: ${interests[j]}`)
    }
};