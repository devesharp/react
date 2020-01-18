import * as React from 'react';
import { storiesOf, addParameters } from '@storybook/react';
import { State, Store } from '@sambego/storybook-state';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import Modal from './modal.component';
import ModalLink from '../modal-link/modal-link.component';

const store = new Store({
    onClosed: ''
});

const styleBtn = {
    backgroundColor: 'rgb(255, 255, 255)',
    display: 'inline-block',
    borderColor: 'rgb(218, 218, 218)',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '2px',
    padding: '5px 20px',
    fontWeight: 600,
    margin: '10px',
    color: '#6b6b6b',
    cursor: 'pointer'
};

storiesOf('UI|Modal/desktop', module)
    .add('default', () => {
        return (
            <>
                <Modal name="modal-default" title="Titulo">
                    aaaaa
                </Modal>
                <ModalLink name="modal-default">
                    <div id="open-modal" style={styleBtn}>
                        Abrir Modal
                    </div>
                </ModalLink>
            </>
        );
    })
    .add('open', () => {
        return (
            <>
                <Modal name="modal-default" title="Titulo" modalOpened>
                    <div className="p-3">Modal</div>
                </Modal>
            </>
        );
    })
    .add('no hash', () => {
        return (
            <>
                <Modal name="modal-default" title="Titulo" noHash>
                    aaaaa
                </Modal>
                <ModalLink name="modal-default">
                    <div id="open-modal" style={styleBtn}>
                        Abrir Modal
                    </div>
                </ModalLink>
            </>
        );
    })
    .add('no noAutoOpen', () => {
        return (
            <>
                <Modal name="modal-default" title="Titulo" noHash noAutoOpen>
                    aaaaa
                </Modal>
                <ModalLink name="modal-default">
                    <div id="open-modal" style={styleBtn}>
                        Abrir Modal
                    </div>
                </ModalLink>
            </>
        );
    })
    .add('button with open modal inside modal', () => {
        return (
            <>
                <Modal name="modal-primary" title="Titulo">
                    <div className="p-3">
                        Primeiro Modal
                        <br />
                        <ModalLink name="modal-secondary">
                            <div
                                id="open-modal-secondary"
                                className="text-primary"
                            >
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
                            <div
                                id="open-modal-tertiary"
                                className="text-primary"
                            >
                                Abrir Terceiro Modal
                            </div>
                        </ModalLink>
                    </div>
                </Modal>
                <Modal name="modal-tertiary" title="Titulo">
                    <div className="p-3">Terceiro Modal</div>
                </Modal>
                <ModalLink name="modal-primary">
                    <div
                        id="open-modal"
                        style={styleBtn}
                        className="text-primary"
                    >
                        Abrir Primeiro Modal
                    </div>
                </ModalLink>
            </>
        );
    })
    .add('onClose', () => (
        <State store={store}>
            {state => [
                <Modal
                    name="modal-primary"
                    title="Titulo"
                    onClose={() => {
                        console.log('asdasd');
                        store.set({ onClosed: 'modal closed' });
                    }}
                >
                    <div className="p-3">
                        Primeiro Modal
                        <br />
                    </div>
                </Modal>,
                <ModalLink name="modal-primary">
                    <div
                        id="open-modal"
                        style={styleBtn}
                        className="text-primary"
                    >
                        Abrir Primeiro Modal
                    </div>
                </ModalLink>,
                <div className="p-3">{state.onClosed}</div>
            ]}
        </State>
    ));

storiesOf('UI|Modal/mobile', module)
    .addParameters({
        viewport: {
            viewports: INITIAL_VIEWPORTS,
            defaultViewport: 'iphone6'
        }
    })
    .add('default', () => {
        return (
            <>
                <Modal name="modal-default" title="Titulo">
                    aaaaa
                </Modal>
                <ModalLink name="modal-default">
                    <div id="open-modal" style={styleBtn}>
                        Abrir Modal
                    </div>
                </ModalLink>
            </>
        );
    })
    .add('open', () => {
        return (
            <>
                <Modal name="modal-default" title="Titulo" modalOpened>
                    <div className="p-3">Modal</div>
                </Modal>
            </>
        );
    })
    .add('no hash', () => {
        return (
            <>
                <Modal name="modal-default" title="Titulo" noHash>
                    aaaaa
                </Modal>
                <ModalLink name="modal-default">
                    <div id="open-modal" style={styleBtn}>
                        Abrir Modal
                    </div>
                </ModalLink>
            </>
        );
    })
    .add('no noAutoOpen', () => {
        return (
            <>
                <Modal name="modal-default" title="Titulo" noHash noAutoOpen>
                    aaaaa
                </Modal>
                <ModalLink name="modal-default">
                    <div id="open-modal" style={styleBtn}>
                        Abrir Modal
                    </div>
                </ModalLink>
            </>
        );
    })
    .add('button with open modal inside modal', () => {
        return (
            <>
                <Modal name="modal-primary" title="Titulo">
                    <div className="p-3">
                        Primeiro Modal
                        <br />
                        <ModalLink name="modal-secondary">
                            <div
                                id="open-modal-secondary"
                                className="text-primary"
                            >
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
                            <div
                                id="open-modal-tertiary"
                                className="text-primary"
                            >
                                Abrir Terceiro Modal
                            </div>
                        </ModalLink>
                    </div>
                </Modal>
                <Modal name="modal-tertiary" title="Titulo">
                    <div className="p-3">Terceiro Modal</div>
                </Modal>
                <ModalLink name="modal-primary">
                    <div
                        id="open-modal"
                        style={styleBtn}
                        className="text-primary"
                    >
                        Abrir Primeiro Modal
                    </div>
                </ModalLink>
            </>
        );
    })
    .add('onClose', () => (
        <State store={store}>
            {state => [
                <Modal
                    name="modal-primary"
                    title="Titulo"
                    onClose={() => {
                        console.log('asdasd');
                        store.set({ onClosed: 'modal closed' });
                    }}
                >
                    <div className="p-3">
                        Primeiro Modal
                        <br />
                    </div>
                </Modal>,
                <ModalLink name="modal-primary">
                    <div
                        id="open-modal"
                        style={styleBtn}
                        className="text-primary"
                    >
                        Abrir Primeiro Modal
                    </div>
                </ModalLink>,
                <div className="p-3">{state.onClosed}</div>
            ]}
        </State>
    ));
