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
  if (selection) {
    for (const entry of Object.entries(selection)) {
      for (const item of Object.entries(entry[1])) {
        if (item[1]) return true;
      }
    }
  }
  return false;
}
