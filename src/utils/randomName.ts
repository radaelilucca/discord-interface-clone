import names from "./names";
import randomNumber from "./randomNumber";

const randomName = () => {
  const name = names.first[randomNumber()] + " " + names.last[randomNumber()];
  return name;
};

export default randomName;
