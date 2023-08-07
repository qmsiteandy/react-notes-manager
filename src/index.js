import "./index.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { App } from "App";
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotePage } from "layouts/NotePage/NotePage";
import { NoteBrowse } from "layouts/NoteBrowse/NoteBrowse";
import { NoteCreate } from "layouts/NoteCreate/NoteCreate";
import { PageNotFound } from "layouts/PageNotFound/PageNotFound";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="/" element={<NoteBrowse />} />
              <Route path="/note/:id" element={<NotePage />} />
              <Route path="/note/create" element={<NoteCreate />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
