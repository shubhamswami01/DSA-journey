class LRUCache {
  constructor(limit) {
    this.limit = limit;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    const value = this.cache.get(key);

    // Move to recent
    this.cache.delete(key);
    this.cache.set(key, value);

    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.limit) {
      // Remove least recently used (first item)
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }

    this.cache.set(key, value);
  }

  show() {
    console.log(this.cache);
  }
}

// Testing
const lru = new LRUCache(3);

lru.put("A", 1);
lru.put("B", 2);
lru.put("C", 3);

lru.get("A"); // A becomes recent
lru.put("D", 4); // B removed (least used)

lru.show();
