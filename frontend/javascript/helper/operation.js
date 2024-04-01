const operation = {
  read: async (params) =>
    APIHandler.call({ method: "GET", endpoint: "read", params }),
  insert: async (body) =>
    await APIHandler.call({ method: "POST", endpoint: "insert", body }),
  update: async (body) =>
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: "this feture under development...!!!",
    }),
  // await APIHandler.call({ method: "POST", endpoint: "update", body }),
};
