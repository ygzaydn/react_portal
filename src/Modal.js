import { useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, id = "modal" }) => {
    const createDiv = (id) => {
        if (document.getElementById(id)) {
            return document.getElementById(id);
        }
        const element = document.createElement("div");
        element.setAttribute("id", id);
        element.setAttribute("class", "modal");

        return element;
    };
    const element = createDiv(id);

    useEffect(() => {
        document.body.appendChild(element);
        return () => document.body.removeChild(element);
    }, [element]);

    return createPortal(
        <div
            style={{
                height: "10rem",
                width: "10rem",
                background: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "2rem",
            }}
        >
            {children}
        </div>,
        element
    );
};

export default Modal;
