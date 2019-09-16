import { configure } from "@storybook/react";
import requireContext from "require-context.macro";

import "../src/styles/styles.scss";

const req = requireContext("../src", true, /\.stories\.tsx$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
