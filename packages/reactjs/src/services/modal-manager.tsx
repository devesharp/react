import ModalTemplate from "./modal-template.abstract";

class ModalManager {
    modalNumber = 0;
    /**
     * Modals
     */
    modals: ModalTemplate[] = [];

    /**
     * Modals abertos
     */
    modalOpens: ModalTemplate[] = [];

    constructor() {
        window.addEventListener("hashchange", () => {
            let hash = window.location.hash.replace("#", "");
            this.openModal(hash, true);
            if (hash === "" || !hash) {
                this.closeAllModal();
            }
        });
    }

    /**
     * Adicionar modal
     */
    public addModal(modal: ModalTemplate) {
        this.modals.push(modal);
        this.openModalCurrentHash(modal);
    }

    /**
     * Abrir determinado modal
     * @param name
     */
    public openModal(name: string, noUpdateHash = false) {
        let i: number = this.modals.findIndex(item => item.name === name);

        if (i !== -1) {
            let modal = this.modals[i];
            if (!modal.noHash && !noUpdateHash) {
                window.location.hash = this.modals[i].name;
            }
            modal.open();
            // Fecha modal se estiver aberto
            this.closeCurrentModal(modal.name);
            // Adiciona em modal aberto
            this.modalOpens.push(modal);
        }
    }

    /**
     * Fechar determinado modal
     * @param name
     */
    public closeModal(name: string) {
        let i: number = this.modals.findIndex(item => item.name === name);

        if (i !== -1) {
            let modal = this.modals[i];

            if (!modal.noHash) {
                window.history.back();
                window.history.replaceState(null, "", window.location.href);
                // window.history.pushState(null, '', window.location.href.split("#")[0]);
                // //
                // window.history.pushState(null, '', window.location.href.split("#")[0]);
            }

            modal.close();

            // Remove modal aberto
            let ii: number = this.modalOpens.findIndex(item => item.name === modal.name);
            if (ii !== -1) {
                this.modalOpens.splice(ii, 1);
            }
        }
    }

    /**
     * Fechar todos os modals
     */
    public closeAllModal() {
        for (const i in this.modalOpens) {
            if (this.modalOpens.hasOwnProperty(i)) {
                const element = this.modalOpens[i];
                element.close();
            }
        }
        this.modalOpens = [];
    }

    /**
     * Abrir modal que está no hash caso seja adicionado
     * @param modal
     */
    openModalCurrentHash(modal: ModalTemplate) {
        let hash = window.location.hash;
        let modalHash = "#" + modal.name;

        if (modalHash == hash && !modal.noAutoOpen) {
            modal.open();
            // Adiciona nos model abertos
            this.modalOpens.push(modal);
        }
    }

    /**
     * Fecha modal atual caso esteja aberto
     * Fecha porém não remove dos modals abertos
     */
    closeCurrentModal(currentModal?: string) {
        if (this.modalOpens.length) {
            let modal = this.modalOpens[this.modalOpens.length - 1];
            if (modal.name !== currentModal) {
                modal.close();
            }
        }
    }

    /**
     * Remover Modal
     */
    public removeModal(modal: ModalTemplate) {
        let i: number = this.modals.findIndex(item => item.name === modal.name);

        if (i !== -1) {
            this.modals.splice(i, 1);

            // Remove modal aberto
            let ii: number = this.modalOpens.findIndex(item => item.name === modal.name);
            if (ii !== -1) {
                this.modalOpens.splice(ii, 1);
            }
        }
    }
}

export default new ModalManager();
