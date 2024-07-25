export type ModelTableFilter = {
  options: { value: string; label: string }[];
  onChange: (selected: string[]) => void;
  placeholder: string;
};
