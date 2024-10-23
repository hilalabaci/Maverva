import { ReactNode, useState } from "react";
import { ToggleRoot } from "./styles";

type ToggleProps = {
  icon: ReactNode;
  activeIcon: ReactNode;
};

const Toggle = ({ icon, activeIcon }: ToggleProps) => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <ToggleRoot pressed={active} onPressedChange={setActive}>
      {active ? activeIcon : icon}
    </ToggleRoot>
  );
};

export default Toggle;
