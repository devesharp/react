export default abstract class ModalTemplate {
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
    noAutoOpen: boolean;

    /**
     * Status do Modal
     */
    opened = false;

    /**
     * Abrir Modal
     */
    public open() {
        this.opened = true;
    }

    /**
     * Fechar Modal
     */
    public close() {
        this.opened = false;
    }
}
