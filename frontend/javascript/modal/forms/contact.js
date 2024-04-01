//add contact
const addContact = () => {
  Swal.fire({
    title: "<strong style='color:#002f4b'>Work Contact</strong>",
    html: `
                    <form style="width:100%;padding:10px" onsubmit="formHandler(event,'refernceInfo')">
    <div class="input-group" style="flex-direction:row;justify-content:space-between;align-items:center;">
        <label for="Name">Name</label>
        <div style="width:80%">
            <input type="text" name="Name" id="Name" placeholder="Referal Name" data-validate="require multi_word"
                oninput="Validation.isValid(this)" onblur="Validation.isValid(this)" style="width:100%" />
        </div>
    </div>
    <div class="input-group" style="flex-direction:row;justify-content:space-between;align-items:center;">
        <label for="Number">Number</label>
        <div style="width:80%">
            <input type="text" name="Number" id="Number" placeholder="Referal Number" data-validate="require digit10"
                oninput="Validation.isValid(this)" onblur="Validation.isValid(this)" style="width:100%" />
        </div>
    </div>
    <div class="input-group" style="flex-direction:row;justify-content:space-between;align-items:center;">
        <label for="Number">Relation</label>
        <div style="width:80%">
            <input type="text" name="Relation" id="Relation" placeholder="Referal Relation" data-validate="require alpha"
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
