import { useEffect, useState } from "react";

export function useSelection() {
  const [selections, setSelections] = useState({});
  const [isSelected, setIsSelected] = useState(false);

  const handleSelected = (e, key) => {
    setSelections({
      ...selections,
      [key]: e instanceof Object ? e.target.checked : e,
    });
  };

  const clearAll = () => {
    console.log("clear");
    setSelections({});
  };

  useEffect(() => {
    setIsSelected(Object.values(selections).some((item) => item));
    console.log(selections);
  }, [selections]);

  return { handleSelected, isSelected, clearAll };
}
