import songAttributesData from './songAttributes.json';

export interface SongAttributes {
  limitations: Record<string, string>;
  bpm: Record<string, string>;
  key: Record<string, string>;
  instrument: Record<string, string>;
  production_technique: Record<string, string>;
  descriptive_word: Record<string, string>;
  theory: Record<string, string>;
}

export const songAttributes = songAttributesData as SongAttributes;
