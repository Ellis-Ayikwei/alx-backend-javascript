const testEntries = {
    "day1" : "sunday",
    "day2" : "Monday"

}

const converted_Objects = Object.entries(testEntries).map(([key, value]) => ({key, value}));
console.log(converted_Objects)
