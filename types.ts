export interface SiteContent {
  logoText: string;
  logoImage: string | null;
  heroHeadline: string;
  heroSubheadline: string;
  visionTitle: string;
  visionText: string;
  missionTitle: string;
  missionText: string;
}

export type EditableField = keyof SiteContent;

export interface EditorProps {
  isOpen: boolean;
  onClose: () => void;
  field: EditableField;
  currentValue: string;
  onSave: (field: EditableField, value: string) => void;
  sectionTitle: string;
}
