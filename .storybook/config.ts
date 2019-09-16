// import { configure } from "@storybook/react";
// import requireContext from "require-context.macro";

// // automatically import all files ending in *.stories.js
// configure(requireContext("../stories", true, /\.stories\.tsx$/), module);
// // configure(require.context("../stories", true, /\.stories\.tsx$/), module);

import { configure } from "@storybook/react";
import requireContext from "require-context.macro";

import "../src/styles.scss";

const req = requireContext("../src", true, /\.stories\.tsx$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
