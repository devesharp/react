import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ModalTemplate from "../../services/modal-template.abstract";
import modalManager from "../../services/modal-manager";
import { cloneNode } from "@babel/types";

export interface PModal {
    name?: string;
    modalOpened?: boolean;
    onClose?: any;
    title?: string;
    noHash?: boolean; // Não deve mostrar hash
    noAutoOpen?: boolean; // Não deve mostrar hash
}

interface SModal {
    modalOpened: boolean;
}

export default class Modal extends React.Component<PModal, SModal> implements ModalTemplate {
    /**
     * Nome do Modal
     */
    name: string;

    /**
     * Deve ter hash no url ou não
     */
    noHash: boolean;

    /**
     * Não abrir automaticamente
     */
    noAutoOpen = false;

    /**
     * Modal Aberto
     */
    opened = false;

    constructor(props: PModal) {
        super(props);

        this.state = {
            modalOpened: this.props.modalOpened || false
        };

        // Bind
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.closeModal = this.closeModal.bind(this);

        // Nome do modal
        this.name = this.props.name || "M" + modalManager.modalNumber++;
        this.noHash = this.props.noHash || false;
        this.noAutoOpen = this.props.noAutoOpen || false;

        modalManager.addModal(this);
    }

    /**
     * Abrir Modal
     */
    open() {
        this.opened = true;
        this.setState({ modalOpened: true });
    }

    /**
     * Fechar Modal
     */
    close() {
        this.opened = false;
        this.setState({ modalOpened: false });

        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    /**
     * Chama função de remover modal
     */
    closeModal() {
        modalManager.closeModal(this.name);
    }

    /**
     * Remove Modal do gerenciador
     */
    componentDidMount() {
        if (this.opened) {
            this.setState({ modalOpened: true });
        }
    }

    /**
     * Remove Modal do gerenciador
     */
    componentWillUnmount() {
        modalManager.removeModal(this);
    }

    render(): JSX.Element {
        let { modalOpened } = this.state;
        console.log("TCL: Modal -> modalOpened", modalOpened);

        return (
            <div className={"ds-modal " + (!modalOpened || "open")} data-modal-name={this.name}>
                <div className={"bg-modal"} onClick={this.closeModal}></div>
                <div className="modal-container modal-container-white">
                    <div className="icon-close inside" onClick={this.closeModal} data-testid="close-modal">
                        <div className="icon-close-only s25x25 black"></div>
                    </div>

                    <div className="modal-title title">{this.props.title}</div>

                    <div className="ds-modal-body" data-testid="children-container">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
