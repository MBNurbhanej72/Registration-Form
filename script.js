const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	validate();
});

const sendData = (usernameVal, sRate, count) => {
	if (sRate === count) {
		swal(
			"Welcome! " +
				usernameVal.charAt(0).toUpperCase() +
				usernameVal.slice(1).toLowerCase(),
			"Registration Successful",
			"success"
		);
		setTimeout(() => {
			location.href = `demo.html?username=${usernameVal}`;
		}, 2000);
	}
};

const successMsg = (usernameVal) => {
	const formCon = document.getElementsByClassName("form-control");
	let count = formCon.length - 1;
	for (let i = 0; i < formCon.length; i++) {
		if (formCon[i].className === "form-control success") {
			let sRate = 0 + i;
			sendData(usernameVal, sRate, count);
		} else {
			return false;
		}
	}
};

const isEmail = (emailVal) => {
	let atsymbole = emailVal.indexOf("@");
	if (atsymbole < 1) return false;
	let dot = emailVal.lastIndexOf(".");
	if (dot <= atsymbole + 3) return false;
	if (dot === emailVal.length - 1) return false;
	return true;
};

const validate = () => {
	const usernameVal = username.value.trim();
	const emailVal = email.value.trim();
	const phoneVal = phone.value.trim();
	const passwordVal = password.value.trim();
	const cpasswordVal = cpassword.value.trim();
	// username
	if (usernameVal === "") {
		setErrorMsg(username, "Username cannot be blank");
	} else if (usernameVal.length < 3) {
		setErrorMsg(username, "Username minimum 3 characters");
	} else {
		setSuccessMsg(username);
	}

	// email
	if (emailVal === "") {
		setErrorMsg(email, "Email cannot be blank");
	} else if (!isEmail(emailVal)) {
		setErrorMsg(email, "Not a valid Email");
	} else {
		setSuccessMsg(email);
	}

	// phone;
	if (phoneVal === "") {
		setErrorMsg(phone, "Phone Number cannot be blank");
	} else if (phoneVal.length != 10) {
		setErrorMsg(phone, "Phone Number minimum 10 characters");
	} else {
		setSuccessMsg(phone);
	}

	// password
	if (passwordVal === "") {
		setErrorMsg(password, "Password cannot be blank");
	} else if (passwordVal.length <= 5) {
		setErrorMsg(password, "Password minimum 6 characters");
	} else {
		setSuccessMsg(password);
	}

	// confirm password
	if (cpasswordVal === "") {
		setErrorMsg(cpassword, "Password cannot be blank");
	} else if (cpasswordVal != passwordVal) {
		setErrorMsg(cpassword, "Password are Not Matching");
	} else {
		setSuccessMsg(cpassword);
	}
	successMsg(usernameVal);
};

function setErrorMsg(input, errormsgs) {
	const formControl = input.parentElement;
	const small = formControl.querySelector("small");
	formControl.className = "form-control error";
	small.innerText = errormsgs;
}
function setSuccessMsg(input) {
	const formControl = input.parentElement;
	formControl.className = "form-control success";
}
