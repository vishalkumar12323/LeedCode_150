# Contain Duplicate [LeetCode: 217]
# Given an initger array, find duplicates numbers if duplicates num parsent return true, otherwise return false.
nums = [1, 2, 3, 1]
nums1 = [2, 4, 6, 9]

def has_duplicate(arr: list) -> bool:
    hash_map = set()
    for num in arr:
        if num in hash_map:
            return True
        hash_map.add(num)

    return False

print(has_duplicate(nums))
print(has_duplicate(nums1))