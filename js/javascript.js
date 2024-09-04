function isAnagram(string1, string2) {
    string1 = string1.replace(/\s+/g, '').toLowerCase();
    string2 = string2.replace(/\s+/g, '').toLowerCase();
    if (string1.length !== string2.length) {
        return false;
    }
    const sortedString1 = string1.split('').sort().join('');
    const sortedString2 = string2.split('').sort().join('');
    return sortedString1 === sortedString2;
}

function sendString() {
    const primaryString = document.getElementById('primaryString').value;
    const secondString = document.getElementById('secondString').value;
    const result = isAnagram(primaryString, secondString);
    if (result) {
        Swal.fire({
            icon: 'success',
            title: 'Sucesso!',
            text: 'As frases são anagramas!',
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Ops...',
            text: 'As frases não são anagramas.',
        });
    }
}