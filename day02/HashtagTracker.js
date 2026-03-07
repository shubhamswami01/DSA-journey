class HashtagTracker {
  constructor() {
    this.countMap = new Map();
  }

  addTag(tag) {
    if (this.countMap.has(tag)) {
      this.countMap.set(tag, this.countMap.get(tag) + 1);
    } else {
      this.countMap.set(tag, 1);
    }
  }

  getTrending() {
    let maxTag = null;
    let maxCount = 0;

    for (let [tag, count] of this.countMap) {
      if (count > maxCount) {
        maxCount = count;
        maxTag = tag;
      }
    }

    return { tag: maxTag, count: maxCount };
  }

  getSortedTrends() {
    return [...this.countMap.entries()]
      .sort((a, b) => b[1] - a[1]);
  }
}

// Testing
const tracker = new HashtagTracker();

const tags = ["#dsa", "#js", "#react", "#dsa", "#js", "#dsa"];

tags.forEach(tag => tracker.addTag(tag));

console.log("Trending:", tracker.getTrending());
console.log("All trends sorted:", tracker.getSortedTrends());
