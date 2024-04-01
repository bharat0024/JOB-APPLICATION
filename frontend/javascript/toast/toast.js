const toast = {
  control: document.querySelector("toast"),
  error: () => {
    toast.control.style.backgroundColor = "#c15f68";
  },
  show: (status, message) => {
    toast.control.className = "show";
    toast.control.innerHTML = message;
    toast[status]();
    setTimeout(function () {
      toast.control.className = "";
    }, 3000);
  },
};