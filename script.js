function firstWord(s) {
  // your code here
	let st=s.trim();
	if(st===""){
		return "";
	}
	return st.split(" ")[0];
}

// Do not change the code below

/const s = prompt("Enter String:");
alert(firstWord(s));
