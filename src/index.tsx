import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./context/theme/ThemeProvider";
import { App } from "./App";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);
