import { data } from "../utils/constants.js";

function Funny({ selectedFrog }) {
  let funny = data.find((item) => {
    return item.name === selectedFrog;
  });

  funny = funny?.image
    ? funny
    : data.find((item) => {
        return item.name === "defa";
      });
  return <img src={funny.image} alt={funny.name} className="" />;
}

export default Funny;
