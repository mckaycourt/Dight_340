console.groupCollapsed('Sort the Doctor Who actors based on when they first appeared in the role');
let sort = actors.sort((actor1, actor2) => {
    return actor1.tenure_start < actor2.tenure_start;
});
console.log(sort);
console.groupEnd();

console.groupCollapsed('Sort the Doctor Who actors based on their last names');
let sort2 = actors.sort((actor1, actor2) => {
    return actor1.last_name > actor2.last_name;
});
console.log(sort2);
console.groupEnd();

console.groupCollapsed('Display the top rated episodes using the map() method');
topRated.map(episode => console.log(episode.title + ' ' + episode.title));
console.groupEnd();

const numbers = [1, 6, 34, 87, 12, 90, 121];
let total = 0;
for (let doctor of actors) {
    total += doctor.tenure_end;
    total -= doctor.tenure_start
}
// console.log(total);
let sumNumbers1 = numbers.reduce((total, number) => {
        return total + number;
    },
    0);

let sumNumbers2 = numbers.reduce((total, number) => total + number, 0);
console.groupCollapsed('Find the Total years');

let totalYears = actors.reduce((totalz, doctor) => {
    let difference = 1;
    if (doctor.tenure_end !== null && doctor.tenure_end !== doctor.tenure_start) {
        difference = doctor.tenure_end - doctor.tenure_start;
    }

    return totalz + difference;
}, 0);

console.log(totalYears);

console.groupEnd();

console.group('Top actors my way');

function check(arr, name) {
    for (let n in arr) {
        if (arr[n].actor === name) {
            return n;
        }
    }
    return 0;
}

let nameCount = topRated.reduce((actors, row) => {
    if (row.actor.includes(',')) {
        let add = row.actor.split(', ');
        for (let name of add) {
            let add = check(actors, name);
            if (add === 0) {
                actors.push({
                    actor: name,
                    count: 1
                })
            }
            else {
                actors[add].count += 1;
            }
        }
        return actors;
    }
    else {
        let add = check(actors, row.actor);
        if (add === 0) {
            actors.push({
                actor: row.actor,
                count: 1,
            });
        }
        else {
            actors[add].count += 1;
        }
        return actors;
    }


}, [])
    .sort((a, b) => {
        return a.count < b.count;
    });

console.table(nameCount);

console.groupEnd();

console.group('Top actors your way');

const nameCount1 = topRated.reduce(
    (doctors, episode) => {
        episode.actor
            .split(', ')
            .map(
                (actor) => {
                    const foundDoctor = doctors.find(doctor => doctor.actor === actor);
                    let foundDoctorIndex = doctors.indexOf(foundDoctor);

                    if (!foundDoctor) {
                        doctors.push({
                            actor: actor,
                            count: 1,
                        });

                    }
                    else {
                        doctors[foundDoctorIndex].count++;
                    }
                }
            )
        return doctors;
    },
    []
).sort((a, b) => b.count > a.count);

console.table(nameCount1);

console.groupEnd();






