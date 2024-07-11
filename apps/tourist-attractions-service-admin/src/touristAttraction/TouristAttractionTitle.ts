import { TouristAttraction as TTouristAttraction } from "../api/touristAttraction/TouristAttraction";

export const TOURISTATTRACTION_TITLE_FIELD = "name";

export const TouristAttractionTitle = (record: TTouristAttraction): string => {
  return record.name?.toString() || String(record.id);
};
