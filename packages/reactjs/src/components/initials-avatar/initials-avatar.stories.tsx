import * as React from "react";
import { storiesOf } from "@storybook/react";
import InitialsAvatar from "./initials-avatar";

storiesOf("InitialsAvatar", module)
    .add("default", () => <InitialsAvatar name={"John"} />)
    .add("size xs", () => <InitialsAvatar name={"John"} size={"xs"} />)
    .add("size s", () => <InitialsAvatar name={"John"} size={"s"} />)
    .add("size m", () => <InitialsAvatar name={"John"} size={"m"} />)
    .add("size l", () => <InitialsAvatar name={"John"} size={"l"} />)
    .add("size xl", () => <InitialsAvatar name={"John"} size={"xl"} />)
    .add("dark", () => <InitialsAvatar name={"John"} dark={true} />);
