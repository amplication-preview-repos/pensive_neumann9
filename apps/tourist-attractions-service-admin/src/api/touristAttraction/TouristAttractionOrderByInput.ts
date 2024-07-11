import { SortOrder } from "../../util/SortOrder";

export type TouristAttractionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  latitude?: SortOrder;
  imageUrl?: SortOrder;
  name?: SortOrder;
  longitude?: SortOrder;
};
