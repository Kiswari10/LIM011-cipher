window.cipher = {
  encode: (offset, string) => {
    let newMessage = '';
    let letter;
    for (let count = 0; count < string.length; count += 1) {
      const element = string.charCodeAt(count);
      if (element >= 65 && element <= 90) {
        const change = ((element - 65 + offset) % 26) + 65;
        letter = String.fromCharCode(change);
      } else if (element >= 97 && element <= 122) {
        const change = ((element - 97 + offset) % 26) + 97;
        letter = String.fromCharCode(change);
      } else {
        letter = string[count];
      }
      newMessage += letter;
    } return newMessage;
  },
  decode: (offset, string) => {
    let newMessage = '';
    let letter;
    for (let count = 0; count < string.length; count += 1) {
      const element = string.charCodeAt(count);
      if (element >= 65 && element <= 90) {
        const change = (((26 + ((element - 65 - offset) % 26))) % 26) + 65;
        letter = String.fromCharCode(change);
      } else if (element >= 97 && element <= 122) {
        const change = (((26 + ((element - 97 - offset) % 26))) % 26) + 97;
        letter = String.fromCharCode(change);
      } else {
        letter = string[count];
      }
      newMessage += letter;
    } return newMessage;
  },
};
