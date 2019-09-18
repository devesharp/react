import * as React from "react";
import { storiesOf } from "@storybook/react";
import UserAvatar from "./user-avatar";
import avatar from "../../../assets/avatar.jpeg";

let userWithImage = {
    name: "John",
    image: avatar
};

let userWithoutImage = {
    name: "John"
};

storiesOf("UserAvatar", module)
    .add("with image", () => <UserAvatar user={userWithImage} />)
    .add("withou image", () => <UserAvatar user={userWithoutImage} />)
    .add("size xs with image", () => (
        <UserAvatar user={userWithImage} size={"xs"} />
    ))
    .add("size s with image", () => (
        <UserAvatar user={userWithImage} size={"s"} />
    ))
    .add("size m with image", () => (
        <UserAvatar user={userWithImage} size={"m"} />
    ))
    .add("size l with image", () => (
        <UserAvatar user={userWithImage} size={"l"} />
    ))
    .add("size xl with image", () => (
        <UserAvatar user={userWithImage} size={"xl"} />
    ))
    .add("size xl without image", () => (
        <UserAvatar user={userWithoutImage} size={"xl"} />
    ));
