import { HoverCard } from "radix-ui";
import styles from "./styles.module.css";
import { ReactNode } from "react";

interface HoverCardProps {
  //triggerWidth?: boolean;
  trigger: ReactNode;
  src: string;
  fullName: string;
  email: string;
  //items?: Array<DropdownMenuItem>;
}

export const HoverCardDemo: React.FC<HoverCardProps> = ({
  trigger,
  src,
  fullName,
  email,
}) => {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger>{trigger}</HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content className={styles.Content} sideOffset={5}>
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            <img className={`${styles.Image} large`} src={src} alt="Radix UI" />
            <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
              <div>
                <div className={`${styles.Text} bold`}>{fullName}</div>
                <div className={`${styles.Text} faded`}>{email}</div>
              </div>
              {/* <div className={styles.Text}>
                Components, icons, colors, and templates for building
                high-quality, accessible UI. Free and open-source.
              </div> */}
              {/* <div style={{ display: "flex", gap: 15 }}>
                <div style={{ display: "flex", gap: 5 }}>
                  <div className={`${styles.Text} bold`}>0</div>{" "}
                  <div className={`${styles.Text} faded`}>Following</div>
                </div>
                <div style={{ display: "flex", gap: 5 }}>
                  <div className={`${styles.Text} bold`}>2,900</div>{" "}
                  <div className={`${styles.Text} faded`}>Followers</div>
                </div>
              </div> */}
            </div>
          </div>

          <HoverCard.Arrow className={styles.Arrow} />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};
