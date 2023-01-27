interface IItem {
  title: string;
  text: string;
  icon: string;
}
interface IListWithIcons {
  items: IItem[];
  style: {};
  column?: boolean;
}

interface IList {
  column?: boolean;
}

export type { IListWithIcons, IList };
