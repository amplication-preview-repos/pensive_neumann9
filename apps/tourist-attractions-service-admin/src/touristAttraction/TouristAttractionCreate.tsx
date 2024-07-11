import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const TouristAttractionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <NumberInput label="latitude" source="latitude" />
        <TextInput label="imageUrl" source="imageUrl" />
        <TextInput label="name" source="name" />
        <NumberInput label="longitude" source="longitude" />
      </SimpleForm>
    </Create>
  );
};
