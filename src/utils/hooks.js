import { useEffect, useState } from "react";

export function useSelection() {
  const [selections, setSelections] = useState({});
  const [isSelected, setIsSelected] = useState(false);
  const [, reRender] = useState();

  const handleSelected = (e, key) => {
    setSelections({
      ...selections,
      [key]: e instanceof Object ? e.target.checked : e,
    });
  };

  const clearAll = () => {
    setSelections({});
    reRender(null);
  };

  useEffect(() => {
    setIsSelected(Object.values(selections).some((item) => item));
  }, [selections]);

  return { handleSelected, isSelected, clearAll };
}

export function isSelected(selection) {
  let resault = false;
  for (const key of Object.keys(selection)) {
    if (typeof selection[key] === "object") {
      console.log("key is object");
      console.log(selection[key]);
      return isSelected(selection[key]);
    } else {
      console.log("is not object");
      if (selection[key]) {
        return true;
      }
    }
  }
}
