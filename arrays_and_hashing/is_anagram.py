# Valid Anagram [LeetCode: 242]
# Given two strings str1 and str2, return True if str2 is an anagram of str2, otherwise return False.

def is_anagram(str1: str, str2: str) -> bool:

    if len(str1) != len(str2): 
        return False
    count = {}
    for char in str1:
        count[char] = count.get(char, 0) + 1

    for char in str2:
        if char not in count:
            return False
        count[char] -= 1

        if count[char] < 0:
            return False

    return True

print(is_anagram("listen", "silent"))
print(is_anagram("hello", "jello"))
