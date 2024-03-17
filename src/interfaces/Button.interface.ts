interface IButton {
  isDefault?: boolean;
  onClick?: () => void;
  children: string;
  allyProps?: never
}

export type { IButton };
