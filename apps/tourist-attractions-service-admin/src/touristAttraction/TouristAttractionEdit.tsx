import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const TouristAttractionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <NumberInput label="latitude" source="latitude" />
        <TextInput label="imageUrl" source="imageUrl" />
        <TextInput label="name" source="name" />
        <NumberInput label="longitude" source="longitude" />
      </SimpleForm>
    </Edit>
  );
};
