let wifi = false;
let classRoom = 'Babylon';
console.log(`Hi there i am about to change password`);
wifi = true;
changePassword = (target, pass) => {
    console.log(`I have changed the password to ${pass}`);

}
changePassword(classRoom, "SUPER_SECRET")


function longestZero(s) {
	s.replace(/[^0]/g, ",").split(",").sort("")[3]
}

longestZero("1000000000011101")
