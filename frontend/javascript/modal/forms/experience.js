//add Experience
const addExperience = () => {
  Swal.fire({
    title: "<strong style='color:#002f4b'>Work Experience</strong>",
    html: `
                    <form style="width:100%;padding:10px" onsubmit="formHandler(event,'experienceInfo')">
    <div class="input-group" style="flex-direction:row;justify-content:space-between;align-items:center;">
        <label for="companyname">Company Name</label>
        <div style="width:70%">
            <input type="text" name="companyname" id="companyname" placeholder="Company Name" data-validate="require"
                oninput="Validation.isValid(this)" onblur="Validation.isValid(this)" style="width:100%" />
        </div>
    </div>
    <div class="input-group" style="flex-direction:row;justify-content:space-between;align-items:center;">
        <label for="expDeg">Designation</label>
        <div style="width:70%">
            <input type="text" name="expDeg" id="expDeg" placeholder="Designation" data-validate="require alpha"
                oninput="Validation.isValid(this)" onblur="Validation.isValid(this)" style="width:100%" />
        </div>
    </div>
    <div class="input-group" style="flex-direction:row;justify-content:space-between;">
        <div style="width:48%;display:flex;justify-content:space-between;align-items:center">
              <label for="expFrom">From</label>
            <div style="width:75%">
            <input type="date" name="expFrom" id="expFrom" placeholder="From"
                value="" data-validate="require"
                onfocus="Validation.validateExp()" onchange="Validation.isValid(this)"
                onblur="Validation.isValid(this)" style="width:100%" />
            </div>
        </div>
            <div style="width:48%;display:flex;justify-content:space-between;align-items:center">
         <label for="expTo">To</label>
         <div style="width:75%">
            <input type="date" name="expTo" id="expTo" placeholder="To" data-validate="require"
                onchange="Validation.isValid(this),validateExp()" onblur="Validation.isValid(this)" style="width:100%" />
            </div>
        </div>
    </div>
    
    <button type="submit" style="margin:10px 0;float:right;width: 120px;padding: 10px;background-color: var(--text1);color: var(--sky-bg);border: none;border-radius: 5px;cursor: pointer;"
                            > Add </button>
</form>
                            `,
    showConfirmButton: false,
  });
  document.body.classList.remove("swal2-height-auto");
  let toDate = document.querySelector("#expTo");
  toDate.value = new Date().toISOString().split("T")[0];
  let fromDate = (document.querySelector("#expFrom").value = new Date(
    new Date(toDate.value).setMonth(new Date(toDate.value).getMonth() - 1)
  )
    .toISOString()
    .split("T")[0]);
};
