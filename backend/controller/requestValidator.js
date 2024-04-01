const requestValidator = {
  validation: {
    basicInfo: {
      firstName: ["require", "alpha"],
      designation: ["require", "alpha"],
      email: ["require", "email"],
      mobile: ["require", "digit10"],
      gender: ["require", "gender"],
      lastName: ["require", "alpha"],
      address1: ["require"],
      address2: ["valid"],
      city: ["require"],
      state: ["require"],
      relation: ["require", "relation"],
    },
    educationInfo: {
      sscBoardName: ["require", "multi_word"],
      sscPassingYear: ["require", "year"],
      sscPercentage: ["require", "float_number"],
      hscBoardName: ["require", "multi_word"],
      hscPassingYear: ["require", "year"],
      hscPercentage: ["require", "float_number"],
      bachelorCourse: ["require"],
      bachelorUniversity: ["require", "multi_word"],
      bachelorPassingYear: ["require", "year"],
      bachelorPercentage: ["require", "float_number"],
      masterCourse: ["require"],
      masterUniversity: ["require", "multi_word"],
      masterPassingYear: ["require", "year"],
      masterPercentage: ["require", "float_number"],
    },
    experienceInfo: {},
    languageInfo: {},
    skillInfo: {},
    refernceInfo: {},
    preference: {},
  },
  validationCondition: {
    require: (value) => !(!value.length || value.trim() == ""),
    alpha: (value) => /^[a-z]+$/i.test(value),
    digit10: (value) => /^[6789]\d{9}$/.test(value),
    digit6: (value) => /[0-9]{6}/.test(value),
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    mobile: (value) => value >= 6666666666,
    multi_word: (value) => /^[a-zA-Z_ ]*$/.test(value),
    year: (value) => /^[12]\d{3}$/.test(value),
    float_number: (value) => !(isNaN(value) || value > 100 || value < 0),
    valid: () => true,
    gender: (value) => !(["male", "female"].indexOf(value) == -1),
    relation: (value) => !(["married", "unmarried"].indexOf(value) == -1),
  },
  insert: async (payload) => {
    // let insertData = [];
    // let step = payload[[Object.keys(payload)[0]]];
    // let stepKey = Object.keys(payload)[0];
    // if (
    //   requestValidator.validation[stepKey] == undefined ||
    //   JSON.stringify(Object.keys(step)) !==
    //     JSON.stringify(Object.keys(requestValidator.validation[stepKey]))
    // )
    //   return { error: "invalid payload.." };
    // return await new Promise((resolve, reject) => {
    //   for (const key in step) {
    //     if (["string", "number"].indexOf(typeof step[key]) == -1)
    //       reject(`invalid data`);
    //     requestValidator.validation[stepKey][key].forEach((validate) => {
    //       if (!requestValidator.validationCondition[validate](step[key]))
    //         reject(`invalid ${key.toLocaleUpperCase()}...`);
    //     });
    //   }
    //   resolve({ success: "inserted" });
    // });
    return { valid: true };
  },
};
module.exports = requestValidator;
