export interface OneSectionItems {
  id: string;
  name: string;
}

export interface OneSection {
  id: number;
  header: string;
  items: OneSectionItems[];
}

export interface Sections {
  sectionOne: OneSection;
  sectionTwo: OneSection;
  sectionTree: OneSection;
}
