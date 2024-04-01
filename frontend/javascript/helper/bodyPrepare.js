const bodyPrepare = (step, table, id) => {
  let body = { [table]: { detail: [{}] } };
  document
    .querySelectorAll(
      `#step-${step - 1} input[data-validate],#step-${
        step - 1
      } select[data-validate], #step-${
        step - 1
      } textarea[data-validate], #step-${step - 1} input[type="radio"]:checked`
    )
    .forEach((filed) => {
      body[table]["detail"][0][filed.getAttribute("name")] = filed.value;
    });
  console.log(body, id);
  if (!body[table]["detail"].length) return;
  if (
    ["educationInfo", "experienceInfo", "refernceInfo"].indexOf(table) != -1
  ) {
    let newData = [];
    for (const keys in body[table]["detail"][0]) {
      newData[keys.substring(keys.length - 1)] =
        newData[keys.substring(keys.length - 1)] == undefined
          ? {}
          : newData[keys.substring(keys.length - 1)];
      newData[keys.substring(keys.length - 1)][
        keys.substring(0, keys.length - 1)
      ] = body[table]["detail"][0][keys];
    }
    body[table]["detail"] = newData;
  } else if (["languageInfo"].indexOf(table) != -1) {
    let newData = [];
    document
      .querySelectorAll(`#step-${step - 1} input[data-parent]`)
      .forEach((element) => {
        let parent = document.querySelector(
          `input[data-language=${element.getAttribute("data-parent")}]`
        ).value;
        newData[parent - 1] =
          newData[parent - 1] == undefined
            ? { pid: parent }
            : newData[parent - 1];
        newData[parent - 1][element.getAttribute("name")] = Number(
          element.checked
        );
      });
    body[table]["detail"] = newData;
  } else if (["skillInfo"].indexOf(table) != -1) {
    let newData = [];
    document
      .querySelectorAll(`#step-${step - 1} input[data-parent]:checked`)
      .forEach((element) => {
        let parent = document.querySelector(
          `input[data-skill=${element.getAttribute("data-parent")}]`
        ).value;
        newData[parent - 1] =
          newData[parent - 1] == undefined
            ? { pid: parent }
            : newData[parent - 1];
        newData[parent - 1]["level"] = element.value;
      });
    body[table]["detail"] = [...newData].filter((data) => data != undefined);
  } else if (table == "preference") {
    let location = [];
    document.querySelectorAll("#location option").forEach((option) => {
      if (option.selected) location.push(option.value);
    });
    body[table]["detail"][0]["location"] = location.toString();
  }
  if (id) body[table]["bid"] = id;
  return body;
};
