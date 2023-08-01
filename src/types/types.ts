export interface INote {
  _id: string;
  title: string;
  note: string;
  tagline: string;
  pinned?: boolean;
}

export interface NoteProps extends INote {
  color: string;
}

export type AddNote = {
  title: string;
  tagline: string;
  note: string;
};
export type PaginationType = {
  totalPage: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  pageNumber: number;
};
