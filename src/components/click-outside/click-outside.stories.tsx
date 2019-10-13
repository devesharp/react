import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ClickOutside from "./click-outside";

storiesOf("ClickOutside", module).add("default", () => (
    <ClickOutside onClickOutside={action("click Outside")} onClickInside={action("click Inside")}>
        <div style={{ background: "red", display: "inline-block" }}>inside</div>
    </ClickOutside>
));
