import * as React from "react";
import modalManager from "../../services/modal-manager";

export interface PModalLink {
    name: string;
    actionClose?: boolean;
}
interface SModalLink {}

export default class ModalLink extends React.Component<PModalLink, SModalLink> {
    state = {};

    constructor(props: PModalLink) {
        super(props);
        this.handleDocumentClick = this.handleDocumentClick.bind(this);
    }

    handleDocumentClick(evt) {
        if (this.props.actionClose) {
            modalManager.closeModal(this.props.name);
        } else {
            modalManager.openModal(this.props.name);
        }
    }

    /**
     * Render
     */
    render(): JSX.Element {
        return <span onClick={this.handleDocumentClick}>{this.props.children}</span>;
    }
}
