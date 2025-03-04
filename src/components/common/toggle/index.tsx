import { ReactNode, useState } from "react";
import { ToggleRoot } from "./styles";

type ToggleProps = {
  icon: ReactNode;
  activeIcon: ReactNode;
  isActive?: boolean;
  onToggle?: (newState: boolean) => void;
};

const Toggle = ({ icon, activeIcon, isActive, onToggle }: ToggleProps) => {
  const [active, setActive] = useState<boolean>(false);
  const handleToggle = () => {
    const newState = !active;
    setActive(newState);
    onToggle?.(newState);
  };
  return (
    <ToggleRoot pressed={active} onPressedChange={handleToggle}>
      {isActive ? activeIcon : icon}
    </ToggleRoot>
  );
}; 

export default Toggle;
