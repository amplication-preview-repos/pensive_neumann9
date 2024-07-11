import { TouristAttractionWhereInput } from "./TouristAttractionWhereInput";
import { TouristAttractionOrderByInput } from "./TouristAttractionOrderByInput";

export type TouristAttractionFindManyArgs = {
  where?: TouristAttractionWhereInput;
  orderBy?: Array<TouristAttractionOrderByInput>;
  skip?: number;
  take?: number;
};
