//add education
const addEducation = () => {
  let titleList = ["SSC", "HSC", "Bachelor", "Master"];
  let title =
    titleList[document.querySelectorAll(".educationInfo")?.length || 0] ||
    titleList[titleList.length - 1];
  Swal.fire({
    title: `<strong style='color:#002f4b'>Work ${title}</strong>`,
    html: `
                    <form style="width:100%;padding:10px" onsubmit="formHandler(event,'educationInfo')">
    <div class="input-group" style="flex-direction:row;justify-content:space-between;align-items:center;">
        <label for="course">Course</label>
        <div style="width:70%">
            <input type="text" name="course" id="course" placeholder="Course Name" data-validate="require"
                oninput="Validation.isValid(this)" onblur="Validation.isValid(this)" value="${title}" readonly style="width:100%" />
        </div>
    </div>
    <div class="input-group" style="flex-direction:row;justify-content:space-between;align-items:center;">
        <label for="passingyear">Year</label>
        <div style="width:70%">
            <input type="text" name="passingyear" id="passingyear" placeholder="passing year" data-validate="require year"
                oninput="Validation.isValid(this)" onblur="Validation.isValid(this)" style="width:100%" />
        </div>
    </div>
   <div class="input-group" style="flex-direction:row;justify-content:space-between;align-items:center;">
        <label for="percentage">Designation</label>
        <div style="width:70%">
            <input type="text" name="percentage" id="percentage" placeholder="percentage" data-validate="require float_number"
                oninput="Validation.isValid(this)" onblur="Validation.isValid(this)" style="width:100%" />
        </div>
    </div>
    <button type="submit" style="margin:10px 0;float:right;width: 120px;padding: 10px;background-color: var(--text1);color: var(--sky-bg);border: none;border-radius: 5px;cursor: pointer;"
                            > Add </button>
</form>
                            `,
    showConfirmButton: false,
  });
  document.body.classList.remove("swal2-height-auto");
};
