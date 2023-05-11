/*
  The idea is that we have a Object whose keys are the ascii character code
  and value is the corresponding character. When we find the character we advance 
  it by k and concat onto the cipher string. In the even we go over the length
  of the alphabet-key, we start from the front of the list after 26 + ascii 'a'/'A'.
  Time complexity: O(n) where n is the length of the string. Making the key would be O(1)
  and lookups are also O(1). 
  Space complexity: O(n) because we're essentially returning the length of the list.
*/
function caesarCipher(s, k) {
  let cipher = '';

  // We create a key to look up chars
  const key = {};
  for (let i = 0; i < 26; i += 1) {
    key[i + 65] = String.fromCharCode(i + 65);
    key[i + 97] = String.fromCharCode(i + 97);
  }

  // If k > 26 (i.e. longer than alphabet), find remainder
  if (k > 26) {
    k = k % 26;
  }

  function makeCipher(charCode) {
    // uppercase
    let newChar;
    if (charCode <= 90) {
      newChar = charCode + k;
      if (newChar > 90) {
        newChar = (newChar - 91) + 65;
      }
    } else {
      // lowercase
      newChar = charCode + k;
      if (newChar > 122) {
        newChar = (newChar - 123) + 97;
      }
    }
    return key[String(newChar)];
  }

  for (let i = 0; i < s.length; i += 1) {
    const charCode = s.charCodeAt(i);
    if (charCode in key) {
      cipher += makeCipher(charCode);
    } else {
      cipher += s[i];
    }
  }
  return cipher;
}

s = 'www.abc.xy';
