/**
 * Day 01: Array - Remove Duplicates
 * Goal: Keep only unique skill tags in a sorted list.
 */

function cleanTags(list) {
    if (list.length === 0) return [];

    let writer = 0; 

    for (let reader = 1; reader < list.length; reader++) {
        if (list[reader] !== list[writer]) {
            writer++;
            list[writer] = list[reader];
        }
    }
    return list.slice(0, writer + 1);
}

const skills = ["CSS", "HTML", "HTML", "JS", "React", "React"];
console.log("Cleaned Skills:", cleanTags(skills));
