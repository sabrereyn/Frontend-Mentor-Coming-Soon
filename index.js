const form = $("#form");
const inputEmail = $(".email");
const errorMsg = $(".error-msg");

const ValidateEmail = (email) => {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      inputEmail.val()
    )
  ) {
    return true;
  }
  return false;
};

form.submit((event) => {
  emailValid = ValidateEmail(this);
  if (!emailValid) {
    event.preventDefault();
    inputEmail.addClass("error");
    errorMsg.css({
      "max-height": errorMsg.prop("scrollHeight"),
    });
  } else {
    alert("Thank you for subscribing!");
  }
});
