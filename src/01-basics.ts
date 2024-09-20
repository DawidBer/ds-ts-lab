interface Friend {
    name: string,
    phone: string,
    age: number,
}

const friend1 = {
    name: "Micheal Lebowski",
    phone: "0873534123",
    age: 25,
};

const friend2 = {
    name: "Mike Wazowski",
    phone: "09812314123",
    age: 20,
};

const friends = [friend1, friend2];
console.log(friends[1]);

//------------------------------------
interface Colleague {
    name: string,
    department: string,
    contact: {
        email: string,
        extension: number,
    },
};

interface ColleagueHistory {
    current: Colleague[],
    former: Colleague[]
};

const colleague1 = {
    name: "Steven Spielberg",
    department: "Engineering",
    contact: {
        email: "Stevengraham@gmail.com",
        extension: 121,
    },
};

const colleague2 = {
    name: "George RR martin",
    department: "Programmer",
    contact: {
        email: "GerogeRR@gmail.com",
        extension: 231,
    },
};

const colleague3 = {
    name: "Danny Devito",
    department: "Scripture",
    contact: {
        email: "DannyDevito@gmail.com",
        extension: 801,
    },
};

export const colleagues: ColleagueHistory = {
    current: [colleague1,colleague2, colleague3],
    former: []
};

console.log(colleagues.current[0]);