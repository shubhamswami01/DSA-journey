/**
 * Day 01: Array - Remove Duplicates
 * Simple Goal: Take a list with double entries and return only unique ones.
 */

function removeDuplicates(list) {
    if (list.length === 0) return [];

    let uniqueIndex = 0; // Where we keep the last unique item found

    for (let i = 1; i < list.length; i++) {
        // If the current item is different from the last unique one
        if (list[i] !== list[uniqueIndex]) {
            uniqueIndex++; 
            list[uniqueIndex] = list[i]; // Move the new item forward
        }
    }

    // Cut the list to only show the unique items
    return list.slice(0, uniqueIndex + 1);
}

// Example: Removing duplicate skill tags
const myTags = ["CSS", "HTML", "HTML", "JS", "React", "React"];
console.log("Clean List:", removeDuplicates(myTags));
