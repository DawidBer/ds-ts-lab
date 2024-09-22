import { friends } from './01-basics';
import { colleagues } from './01-basics';
import {Friend, Colleague, ColleagueHistory} from './myTypes';

function older(f: Friend) : string {
    f.age += 1;
    return `${f.name} is now ${f.age}`;
}

//console.log(older(friends[0]));

function allOlder(friends: Friend[]) : string[] {
    return friends.map(friend => {
        friend.age += 1;

        return `${friend.name} is now ${friend.age}`;
    });
}

//console.log(allOlder(friends));

//Find the colleague with highest extension number
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }

  console.log(highestExtension(colleagues.current));

//Adds colleague and sets the extension as the highest extension
function addColleague(i: Colleague[], name: string, department: string, email: string) 
{
  const highestColleague = highestExtension(colleagues.current);
  const newHighest = highestColleague.contact.extension + 1;

  const newColleague: Colleague =
  {
    name: name,
    department: department,
    contact: {
      email: email,
      extension: newHighest
    }
  };
  colleagues.current.push(newColleague);
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));