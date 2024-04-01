//validation
const Validation = {
  allValid: true,
  validationCondition: {
    require: (value) =>
      !value.length || value.trim() == ""
        ? { errorMessage: "filed is requied...!!", valid: false }
        : { valid: true },
    alpha: (value) =>
      !/^[a-z]+$/i.test(value)
        ? { errorMessage: "only alphabet is allowed..", valid: false }
        : { valid: true },
    digit10: (value) =>
      !/^\d{10}$/.test(value)
        ? { errorMessage: "only 10 digit allowed..", valid: false }
        : { valid: true },
    digit6: (value) =>
      !/^\d{6}$/.test(value)
        ? { errorMessage: "only 6 digit allowed..", valid: false }
        : { valid: true },
    email: (value) =>
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? { errorMessage: "invalid email address..", valid: false }
        : { valid: true },
    mobile: (value) =>
      !/^[6789]{1,}/.test(value)
        ? { errorMessage: "mobile number start with 6,7,8,9..", valid: false }
        : { valid: true },
    multi_word: (value) =>
      !/^[a-zA-Z_ ]*$/.test(value)
        ? { errorMessage: "invalid data format..", valid: false }
        : { valid: true },
    year: (value) =>
      !/^[12]\d{3}$/.test(value)
        ? { errorMessage: "invalid year format..", valid: false }
        : { valid: true },
    float_number: (value) =>
      isNaN(value) || value > 100 || value < 0
        ? { errorMessage: "invalid percentage..", valid: false }
        : { valid: true },
    option_require_check: (controls) => {},
    digit: (value) =>
      !/^\d{1,}/.test(value)
        ? { errorMessage: "invalid input..", valid: false }
        : { valid: true },
  },
  isValid: (control) => {
    return true;
    let validateControls = {};
    control
      .getAttribute("data-validate")
      .split(" ")
      .forEach((validCondition) => {
        if (
          validateControls[control.id]?.valid == undefined ||
          validateControls[control.id]?.valid ||
          validateControls[control.id] == undefined
        ) {
          validateControls[control.name] = Validation.validationCondition[
            validCondition
          ](control.value);
          if (control.nextSibling != null) {
            control.nextSibling.remove();
          }
          if (validateControls[control.name].errorMessage != undefined) {
            Validation.allValid = false;
            let errorElement = document.createElement("error");
            errorElement.innerText =
              validateControls[control.name].errorMessage;
            control.insertAdjacentElement("afterend", errorElement);
          }
        }
      });
    Validation.allValid = document.querySelector("error") == null;
  },
  validateAll: (step) => {
    if (step == 4) {
      Validation.allValid = Boolean(
        document.querySelectorAll("input[data-language]:checked").length
      );
    } else if (step == 5) {
      Validation.allValid = Boolean(
        document.querySelectorAll("input[data-skill]:checked").length
      );
    } else {
      document
        .querySelectorAll(
          `#step-${step} input[data-validate],#step-${step} select[data-validate], #step-${step} textarea[data-validate]`
        )
        .forEach(Validation.isValid);
      if (document.querySelector("error") != null)
        document.querySelector("error").previousElementSibling.focus();
    }
  },
  validateExp: () => {
    let fromDate = document.querySelector("#expFrom");
    let toDate = document.querySelector("#expTo");
    let today = new Date().toISOString().split("T")[0];
    toDate.max = today;
    if (toDate.value.trim() == "")
      toDate.value = new Date().toISOString().split("T")[0];
    fromDate.max = new Date(
      new Date(toDate.value).setMonth(new Date(toDate.value).getMonth() - 1)
    )
      .toISOString()
      .split("T")[0];
    if (new Date(fromDate.value) > new Date(fromDate.max))
      fromDate.value = fromDate.max;
  },
};

//checkbox handle
const chkHndl = (element) => {
  let parent = document.getElementById(element.getAttribute("data-parent"));
  parent.removeAttribute("hidden");
  parent.setAttribute("checked", "");
  if (
    document.querySelectorAll(
      `input[data-parent=${element.getAttribute("data-parent")}]:checked`
    ).length == 0
  ) {
    parent.removeAttribute("checked");
    parent.setAttribute("hidden", "");
  }
};
const hdlrSkill = (control) => {
  if (
    document.querySelector(
      `input[data-parent=${control.getAttribute("data-skill")}]:checked`
    ) != null
  ) {
    document.querySelector(
      `input[data-parent=${control.getAttribute("data-skill")}]:checked`
    ).parentElement.innerHTML = document.querySelector(
      `input[data-parent=${control.getAttribute("data-skill")}]:checked`
    ).parentElement.innerHTML;
    control.removeAttribute("checked");
    control.setAttribute("hidden", "");
    control.parentElement.innerHTML = control.parentElement.innerHTML;
  }
};
