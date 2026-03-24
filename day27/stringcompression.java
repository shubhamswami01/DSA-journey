class Solution {
    public int compress(char[] chars) {
        int i = 0;
        int index = 0;

        while (i < chars.length) {
            char current = chars[i];
            int count = 0;

            // Count occurrences
            while (i < chars.length && chars[i] == current) {
                i++;
                count++;
            }

            // Place character
            chars[index] = current;
            index++;

            // Place count if greater than 1
            if (count > 1) {
                String num = Integer.toString(count);

                for (int j = 0; j < num.length(); j++) {
                    chars[index] = num.charAt(j);
                    index++;
                }
            }
        }

        return index;
    }
}