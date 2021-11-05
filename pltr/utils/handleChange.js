let pwderr = "salut";

const handleChangeEmail = (e) => {
  const newEmail = e.target.value.replace(/[^0-9a-zA-Z\@.-]/, "");
  e.target.value = newEmail;
};

const handleChangePassword = (e) => {
  if (e.target.value.length >= 5 && e.target.value.length <= 40) {
    pwderr = "";
  } else {
    if (e.target.value.length < 5) {
      pwderr = "Le mot de passe est trop court";
    }
    else {
      pwderr = "Le mot de passe est trop long";
    }
  }
  return pwderr;
};

module.exports = {handleChangeEmail, handleChangePassword }