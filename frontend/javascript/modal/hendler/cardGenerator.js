const cardGenerator = (data, stepName) => {
  if (
    document
      .getElementById(`btnAdd${stepName}`)
      .previousElementSibling.tagName.toLocaleLowerCase() == "p"
  )
    document
      .getElementById(`btnAdd${stepName}`)
      .previousElementSibling.remove();
  let element = `
                <div class="${stepName}"
                style="margin: 3px;width: 120px;height: 120px;border-radius: 10px;box-shadow: 1px 1px 1px rgba(0, 0, 0, .4),inset 1px 1px 1px rgba(0, 0, 0, .2);color: gray;display: flex;justify-content: center;align-items: center;cursor: pointer;flex-direction: column;">
                <strong style="color: var(--text1);">${
                  data[
                    stepName == "educationInfo"
                      ? "course"
                      : stepName == "experienceInfo"
                      ? "companyname"
                      : "name"
                  ]
                }</strong>
                </div>
                `;
  let id = document.querySelectorAll(`.${stepName}`).length;
  element += "<div>";
  for (const key in data) {
    element += `<input data-validate="require" id="${key}${id}" name="${key}${id}" value="${data[key]}" readonly style='display:none' />`;
  }
  element += "</div>";
  document
    .getElementById(`btnAdd${stepName}`)
    .insertAdjacentHTML("beforeBegin", element);
};
