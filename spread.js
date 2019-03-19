const horses = {
    firstLane: "joe",
    secondLane: "Jim"
};

const races = {
    day1: {
        ...horses,
        time: '3pm'
    },
    day2: {
        ...horses,
        time: "2pm"
    }
};

console.log(races);