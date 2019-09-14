import React from "react";
import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";
import ExampleComponent from "../src/index";

export default {
  title: "Welcome"
};

export const toStorybook = () => (
  <ExampleComponent text="Modern React component module sdasasd" />
);

toStorybook.story = {
  name: "to Storybook"
};
