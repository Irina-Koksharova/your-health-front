interface IButton {
  hero?: boolean;
  header?: boolean;
  children: string;
  onClick?: () => void;
}

export type { IButton };
