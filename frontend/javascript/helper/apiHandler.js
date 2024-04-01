const APIHandler = {
  url: "http://localhost:9889",
  fetchHandler: async ({ method, endpoint, body, params = "" }) => {
    return await fetch(
      `${APIHandler.url}/${endpoint}/${params}`,
      (() => {
        return method === "POST"
          ? {
              method,
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(body),
            }
          : {};
      })()
    ).then((response) => response.json());
  },
  call: async (props) => {
    try {
      let response = await APIHandler.fetchHandler(props);
      if (response.error != undefined) {
        throw response.error;
      }
      return response.success;
    } catch (error) {
      toast.show(
        "error",
        error.message == "Failed to fetch" ? "Server is down..!!" : error
      );
      console.log(error);
      return;
    }
  },
};
