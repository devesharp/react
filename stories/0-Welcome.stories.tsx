import * as React from "react";
import { storiesOf } from "@storybook/react";
import ExampleComponent from "../src/index";

export default {
  title: "Welcome"
};

storiesOf("Button", module).add("with emoji", () => (
  <ExampleComponent text="Modern React component module sdasasd" />
));
