import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Modal from "./Modal";

function App() {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <button onClick={() => setModalOpen(true)}>
                    Click here to open modal
                </button>
            </header>
            {modalOpen && (
                <Modal>
                    <button onClick={() => setModalOpen(false)}>
                        Click here to close modal
                    </button>
                </Modal>
            )}
        </div>
    );
}

export default App;
