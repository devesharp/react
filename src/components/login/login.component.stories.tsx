import * as React from "react";
import { storiesOf, addParameters } from "@storybook/react";
import { State, Store } from "@sambego/storybook-state";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import Login from "./login.component";

const store = new Store({
    onClosed: ""
});

storiesOf("UI|Login/desktop", module).add("default", () => <Login />);

// storiesOf("UI|Login/mobile", module)
//     .addParameters({
//         viewport: {
//             viewports: INITIAL_VIEWPORTS,
//             defaultViewport: "iphone6"
//         }
//     })
//     .add("default", () => {
//         return (
//             <>
//                 <Modal name="modal-default" title="Titulo">
//                     aaaaa
//                 </Modal>
//                 <ModalLink name="modal-default">
//                     <div id="open-modal">Abrir Modal</div>
//                 </ModalLink>
//             </>
//         );
//     });
