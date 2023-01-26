interface IItem {
  title: string;
  text: string;
  path: string[];
  viewBox: string;
  width: string;
  height: string;
}

interface IListWithIcons {
  items: IItem[];
}

export type { IListWithIcons };
