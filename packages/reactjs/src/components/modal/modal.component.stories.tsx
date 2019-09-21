import * as React from "react";
import { storiesOf, addParameters } from "@storybook/react";
import { State, Store } from "@sambego/storybook-state";
import Modal from "./modal.component";
import ModalLink from "../modal-link/modal-link.component";

const store = new Store({
    onClosed: ""
});

storiesOf("UI|Modal/desktop", module)
    .add("default", () => {
        return (
            <>
                <Modal name="modal-default" title="Titulo">
                    aaaaa
                </Modal>
                <ModalLink name="modal-default">
                    <div id="open-modal">Abrir Modal</div>
                </ModalLink>
            </>
        );
    })
    .add("no hash", () => {
        return (
            <>
                <Modal name="modal-default" title="Titulo" noHash={true}>
                    aaaaa
                </Modal>
                <ModalLink name="modal-default">
                    <div id="open-modal">Abrir Modal</div>
                </ModalLink>
            </>
        );
    })
    .add("no noAutoOpen", () => {
        return (
            <>
                <Modal name="modal-default" title="Titulo" noHash={true} noAutoOpen={true}>
                    aaaaa
                </Modal>
                <ModalLink name="modal-default">
                    <div id="open-modal">Abrir Modal</div>
                </ModalLink>
            </>
        );
    })
    .add("button with open modal inside modal", () => {
        return (
            <>
                <Modal name="modal-primary" title="Titulo">
                    <div className="p-3">
                        Primeiro Modal
                        <br />
                        <ModalLink name="modal-secondary">
                            <div id="open-modal-secondary" className={"text-primary"}>
                                Abrir Segundo Modal
                            </div>
                        </ModalLink>
                    </div>
                </Modal>
                <Modal name="modal-secondary" title="Titulo">
                    <div className="p-3">
                        Segundo Modal
                        <br />
                        <ModalLink name="modal-tertiary">
                            <div id="open-modal-tertiary" className={"text-primary"}>
                                Abrir Terceiro Modal
                            </div>
                        </ModalLink>
                    </div>
                </Modal>
                <Modal name="modal-tertiary" title="Titulo">
                    <div className="p-3">Terceiro Modal</div>
                </Modal>
                <ModalLink name="modal-primary">
                    <div id="open-modal" className={"text-primary"}>
                        Abrir Primeiro Modal
                    </div>
                </ModalLink>
            </>
        );
    })
    .add("onClose", () => (
        <State store={store}>
            {state => [
                <Modal
                    name="modal-primary"
                    title="Titulo"
                    onClose={() => {
                        console.log("asdasd");
                        store.set({ onClosed: "modal closed" });
                    }}
                >
                    <div className="p-3">
                        Primeiro Modal
                        <br />
                    </div>
                </Modal>,
                <ModalLink name="modal-primary">
                    <div id="open-modal" className={"text-primary"}>
                        Abrir Primeiro Modal
                    </div>
                </ModalLink>,
                <div className="p-3">--{state.onClosed}--</div>
            ]}
        </State>
    ));

storiesOf("UI|Modal/mobile", module)
    .add("default", () => {
        return (
            <>
                <Modal name="modal-default" title="Titulo">
                    <div className="p-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s
                        <br />
                    </div>
                </Modal>
                <ModalLink name="modal-default">Abrir Modal</ModalLink>
            </>
        );
    })
    .add("full height", () => {
        const store = new Store({
            modalState: true
        });

        return (
            <>
                <Modal name="modal-default" title="Titulo">
                    <div className="p-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like.
                        <br />
                        <br />
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </div>
                    <br />
                </Modal>
                <ModalLink name="modal-default">Abrir Modal</ModalLink>
            </>
        );
    });
