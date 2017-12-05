function buttonClick() {
	const myBox = document.getElementsByClassName('box')[0];
	let pos = 0;
	let t = setInterval(move, 5);
	function move() {
		if(pos === 900) {
			clearInterval(t);
		} else {
			myBox.style.left = pos + 'px';
			pos += 1;
		}
	}
}
