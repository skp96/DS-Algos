def caesarCipherEncryptor(string, key):
    encryptedCaesar = ''
    alphabet = list('abcdefghijklmnopqrstuvwxyz')

    for char in string:
        idx = alphabet.index(char)
        new_idx = (idx + key) % len(alphabet)
        encryptedCaesar += alphabet[new_idx]

    return encryptedCaesar

# Time Complexity: O(n)
# Space Complexity: O(n)
