let Id = null;
let steps = [
  "basicInfo",
  "educationInfo",
  "experienceInfo",
  "languageInfo",
  "skillInfo",
  "refernceInfo",
  "preference",
];

const next = async (curr, id = null) => {
  if (curr == 8) {
    Swal.fire({
      title: "Good job!",
      text: "Your application is submited..!",
      icon: "success",
    }).then((result) => {
      location.reload();
    });
    document.body.classList.remove("swal2-height-auto");
    return;
  } else if (curr !== 1) {
    let payload = bodyPrepare(curr, steps[curr - 2], Id);
    if (payload[steps[curr - 2]].detail.length) {
      let response = await operation[localStorage.getItem("mode")](payload);
      if (response?.error != undefined) return;
      if (!Id) Id = response;
    }
  }
  document
    .querySelectorAll(`#step-${curr - 1},#step-${curr},#step-${curr + 1}`)
    .forEach((step) => {
      if (step.id == `step-${curr}`) {
        step.style.display = "block";
        document.getElementById(step.id + "-nav").className = "active";
      } else {
        step.style.display = "none";
      }
    });
  if (id) {
    await dataFiler({ table: steps[curr - 1], id });
  }
};
const modeSwitcher = async () => {
  Id = new URLSearchParams(location.search).get("id");
  localStorage.setItem("mode", Id !== null ? "update" : "insert");
  next(1, Id);
};
modeSwitcher();

const nextStep = async (step) => {
  Validation.validateAll(step - 1);
  if (!Validation.allValid) return;
  next(step, Id);
};
