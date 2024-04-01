const dataFiler = async ({ table, id }) => {
  let data = await operation.read(JSON.stringify({ table, id }));
  for (const key in data) {
    if (key == "bid") continue;
    let control =
      document.querySelector(`input[id=${key}],textarea[id=${key}]`) ||
      document.getElementById(data[key].toString().toLowerCase()) ||
      document.querySelector(
        `option[value='${data[key].toString().toLowerCase()}']`
      );
    if (control == null) {
      ["educationInfo", "experienceInfo", "refernceInfo"].indexOf(table) !=
        -1 && cardGenerator(data, table);
      return;
    }
    if (control.type == "date")
      data[key] = new Date(data[key]).toISOString().split("T")[0];
    switch (control.tagName) {
      case "INPUT":
      case "TEXTAREA":
        control[
          ["radio", "checkbox"].indexOf(control.type) != -1
            ? "checked"
            : "value"
        ] = data[key];
        break;
      case "OPTION":
        control.selected = true;
        break;
      default:
        break;
    }
  }
};
