import { friends } from './01-basics';
import { colleagues } from './01-basics';
import {Friend, Colleague, ColleagueHistory, EmailContact} from './myTypes';

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
function highestExtension(cs: Colleague[]) {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }

 // console.log(highestExtension(colleagues.current));

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

//addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
//console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

function sortColleagues(colleagues: Colleague[], sorter: (c1: Colleague, c2: Colleague) => number, max?: number): EmailContact[]
{
  let end = colleagues.length;
  if (max !== undefined) 
  {
    end = max < 2 ? 1 : max
  }
  const sorted = colleagues.sort(sorter);
  const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return fullResult.slice(0,end)
}

console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length)));

function findFriends(friends: Friend[], filterer: (c1: Friend) => boolean): string[]
{
  const filtered = friends.filter(filterer);
  return filtered.map(friend => friend.name);
}

//console.log(findFriends(friends, (friend) => friend.name.startsWith('Mi')));
//console.log(findFriends(friends, (friend) => friend.age < 23));