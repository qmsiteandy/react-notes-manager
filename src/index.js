import "./index.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { App } from "App";
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Note } from "layouts/Note/Note";
import { NoteBrowse } from "layouts/NoteBrowse/NoteBrowse";
import { NoteCreate } from "layouts/NoteCreate/NoteCreate";
import { PageNotFound } from "layouts/PageNotFound/PageNotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/note" element={<NoteBrowse />} />
            <Route path="/note/:id" element={<Note />} />
            <Route path="/note/create" element={<NoteCreate />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
