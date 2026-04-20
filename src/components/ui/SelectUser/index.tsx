import React, { useState, useRef, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import {
  Chevron,
  Dropdown,
  Option,
  Selected,
  SelectedWrapper,
  Wrapper,
} from "./styled";
import { UserType } from "../../../types/user.types";
import MemberPhoto from "../../../features/user/member-photo";

interface UserSelectProps {
  users: UserType[];
  selectedUser?: UserType | null | undefined;
  onChange?: (user: UserType | null) => void;
  displayNameProps?: boolean;
}

export const UserSelect: React.FC<UserSelectProps> = ({
  users,
  selectedUser,
  onChange,
  displayNameProps,
}) => {
  const [open, setOpen] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});
  const selectedRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (!open && selectedRef.current) {
      const rect = selectedRef.current.getBoundingClientRect();
      const dropdownHeight = 200;
      const spaceAbove = rect.top;
      const openUpward = spaceAbove > dropdownHeight;
      setDropdownStyle({
        position: "fixed",
        right: window.innerWidth - rect.right,
        ...(openUpward
          ? { bottom: window.innerHeight - rect.top + 6 }
          : { top: rect.bottom + 6 }),
        zIndex: 9999,
        minWidth: 160,
      });
    }
    setOpen((prev) => !prev);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        selectedRef.current &&
        !selectedRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open]);

  const handleSelect = (option: UserType) => {
    onChange?.(option);
    setOpen(false);
  };

  const displayName =
    selectedUser?.FullName?.trim() ||
    selectedUser?.Email?.trim() ||
    "Unknown user";

  return (
    <Wrapper>
      <Selected ref={selectedRef} onClick={handleToggle}>
        {selectedUser ? (
          <SelectedWrapper>
            <MemberPhoto
              user={selectedUser}
              $userPhotoWidth="24px"
              $userPhotoHeight="24px"
              $userBorderadius="50px"
              $userPhotoFontSize="10px"
            />
            {displayNameProps && displayName}
          </SelectedWrapper>
        ) : (
          <>
            <MemberPhoto
              user={undefined}
              $userPhotoWidth="24px"
              $userPhotoHeight="24px"
              $userBorderadius="50px"
              $userPhotoFontSize="10px"
            />
            {displayNameProps && "Unassigned"}
          </>
        )}
        {displayNameProps && <Chevron open={open}>▾</Chevron>}
      </Selected>

      {open &&
        ReactDOM.createPortal(
          <Dropdown ref={dropdownRef} style={dropdownStyle}>
            {users.map((user) => (
              <Option
                key={user.Id}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelect(user);
                }}
              >
                <MemberPhoto
                  user={user}
                  $userPhotoWidth="24px"
                  $userPhotoHeight="24px"
                  $userBorderadius="50px"
                  $userPhotoFontSize="10px"
                />
                {user.FullName}
              </Option>
            ))}
          </Dropdown>,
          document.body
        )}
    </Wrapper>
  );
};
