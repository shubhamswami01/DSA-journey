class Solution {
    public boolean isAnagram(String s, String t) {
        // Step 1: Length check
        if (s.length() != t.length()) {
            return false;
        }

        // Step 2: Create frequency array
        int[] count = new int[26];

        // Step 3: Count characters
        for (int i = 0; i < s.length(); i++) {
            count[s.charAt(i) - 'a']++;  // increment for s
            count[t.charAt(i) - 'a']--;  // decrement for t
        }

        // Step 4: Check all values are zero
        for (int c : count) {
            if (c != 0) {
                return false;
            }
        }

        return true;
    }
}