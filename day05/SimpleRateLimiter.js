class RateLimiter {
  constructor(limit, timeWindow) {
    this.limit = limit;
    this.timeWindow = timeWindow; // in milliseconds
    this.users = new Map();
  }

  isAllowed(userId) {
    const currentTime = Date.now();

    if (!this.users.has(userId)) {
      this.users.set(userId, []);
    }

    const timestamps = this.users.get(userId);

    // Remove old requests outside window
    while (timestamps.length && currentTime - timestamps[0] > this.timeWindow) {
      timestamps.shift();
    }

    if (timestamps.length < this.limit) {
      timestamps.push(currentTime);
      return true;
    }

    return false;
  }
}

// Testing
const limiter = new RateLimiter(3, 10000); // 3 requests per 10 sec

console.log(limiter.isAllowed("user1")); // true
console.log(limiter.isAllowed("user1")); // true
console.log(limiter.isAllowed("user1")); // true
console.log(limiter.isAllowed("user1")); // false
