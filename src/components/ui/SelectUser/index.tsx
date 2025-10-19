import React, { useState } from "react";
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
      <Selected
        onClick={(e) => {
          e.stopPropagation();
          setOpen((prev) => !prev);
        }}
      >
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

      {open && (
        <Dropdown>
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
        </Dropdown>
      )}
    </Wrapper>
  );
};
