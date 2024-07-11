import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const TouristAttractionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="description" source="description" />
        <TextField label="latitude" source="latitude" />
        <TextField label="imageUrl" source="imageUrl" />
        <TextField label="name" source="name" />
        <TextField label="longitude" source="longitude" />
      </SimpleShowLayout>
    </Show>
  );
};
