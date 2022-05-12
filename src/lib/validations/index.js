import exists from "./required";
import isEmail from "./email";

export function assert(validations = [], value) {
  for (let i = 0; i < validations.length; i++)
    var v = validate(validations[i], value);
  if (!v.success) return v;
  return { success: true };
}

export function validate(validation, value) {
  if (!validation) return true;

  let validations = [
    { id: "required", run: exists, message: "This field is required" },
    { id: "email", run: isEmail, message: "This is not a valid email" },
  ];

  let fn = validations.filter((_) => _.id == validation)[0];
  if (!fn)
    throw new Error(
      `validation not found.\n\nPossible validations:\n${
        "- " + validations.map((_) => _.id).split("\n- ")
      }\nValidation provided: ${validation}`
    );
  return { success: fn.run(value), message: fn.message };
}
