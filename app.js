const userName = [
    'yandy',
    'dimas',
    'mita',
    'rifa',
    'dicky'
]; 

const newUsername = 'dicky';
const isTaken = userName.includes(newUsername);
if (isTaken) {
    console.log('username sudah dipakai');
} else {
    console.log('username belum dipakai');
};