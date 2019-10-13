import * as React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Modal from "../modal.component";

test("Modals", () => {
    const component = render(<Modal onClose={() => {}} modalState={true} title="Titulo" />);
});
