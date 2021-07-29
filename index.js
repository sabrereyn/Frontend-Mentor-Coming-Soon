const form = $("#form");
const inputEmail = $(".email");
const errorMsg = $(".error-msg");

const ValidateEmail = () => {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      inputEmail.val()
    )
  ) {
    return true;
  }
  return false;
};

const triggerError = () => {
  inputEmail.addClass("error");
  errorMsg.css({
    "max-height": errorMsg.prop("scrollHeight"),
  });
};

form.submit((event) => {
  let emailValid = ValidateEmail();
  if (inputEmail.val().trim() === "") {
    event.preventDefault();
    errorMsg.text("Whoops! It looks like you forgot to add your email!");
    triggerError();
  } else {
    if (!emailValid) {
      event.preventDefault();
      errorMsg.text("Please provide a valid email address");
      triggerError();
    } else {
      alert("Thank you for subscribing!");
    }
  }
});
