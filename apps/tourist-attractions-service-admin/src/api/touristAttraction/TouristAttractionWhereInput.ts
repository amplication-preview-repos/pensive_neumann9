import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type TouristAttractionWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  latitude?: FloatNullableFilter;
  imageUrl?: StringNullableFilter;
  name?: StringNullableFilter;
  longitude?: FloatNullableFilter;
};
