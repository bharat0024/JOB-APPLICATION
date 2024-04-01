const formHandler = (e, stepName) => {
  e.preventDefault();
  let data = Object.fromEntries(new FormData(e.target));
  if (!Object.values(data).some((val) => !val.length)) {
    cardGenerator(data, stepName);
  }
  Swal.close();
};
