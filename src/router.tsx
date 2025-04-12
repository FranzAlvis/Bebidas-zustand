import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IndexPage } from "./pages/IndexPage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { Layout } from "./layouts/Layout";
import GenerateAI from "./pages/GenerateAI";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />} >
                    <Route path="/" element={<IndexPage />} index />
                    <Route path="/favoritos" element={<FavoritesPage />} />
                    <Route path="/generate" element={<GenerateAI />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};