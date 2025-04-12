import { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";

export const Header = () => {
    const [searchFilters, setSearchFilters] = useState({
        ingredient: "",
        category: ""
    });

    const { pathname } = useLocation();

    const isHome = useMemo(() => pathname === "/", [pathname])

    const { fetchCategories, categories, searchRecipes, showNotification } = useAppStore()


    useEffect(() => {
        fetchCategories()
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setSearchFilters({
            ...searchFilters,
            [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Object.values(searchFilters).includes("")) {
            showNotification({
                text: "Todos los campos son obligatorios",
                error: true
            })
            return;
        }

        searchRecipes(searchFilters)

    }

    return (
        <header className={isHome ? "bg-[url('/bg.jpg')] bg-cover bg-no-repeat bg-center" : "bg-slate-800"}>
            <div className="mx-auto container px-5 py-16">
                <div className="flex justify-between items-center">
                    <div>
                        <img className="w-32" src="/logo.svg" alt="logotipo" />
                    </div>
                    <nav className="flex gap-4">
                        <NavLink to="/" className={({ isActive }) => isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'}>Inicio</NavLink>
                        <NavLink to="/favoritos" className={({ isActive }) => isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'}>Favoritos</NavLink>
                        <NavLink to="/generate" className={({ isActive }) => isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'}>Generar con IA</NavLink>
                    </nav>
                </div>

                {
                    isHome && (
                        <form onSubmit={handleSubmit}
                            className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
                        >
                            <div className="space-y-4">
                                <label htmlFor="ingredient"
                                    className="block text-white uppercase font-extrabold text-lg">
                                    Nombre o Ingredientes
                                </label>
                                <input type="text" id="text"
                                    name="ingredient"
                                    className=" p-3 w-full rounded-lg focus:outline-none bg-white"
                                    placeholder="Nombre o Ingrediente. Ej. Vodka, Tequila"
                                    onChange={handleChange}
                                    value={searchFilters.ingredient} />
                            </div>
                            <div className="space-y-4">
                                <label htmlFor="category"
                                    className="block text-white uppercase font-extrabold text-lg">
                                    Categoría
                                </label>
                                <select name="category" id="category"
                                    className="p-3 w-full rounded-lg focus:outline-none bg-white"
                                    onChange={handleChange}
                                    value={searchFilters.category}>
                                    <option value="" disabled>-- Selecciona una categoría --</option>
                                    {
                                        categories.drinks.map((category) => (
                                            <option key={category.strCategory} value={category.strCategory}>
                                                {category.strCategory}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                            <input type="submit" value="Buscar Recetas"
                                className="cursor-pointer bg-orange-600 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase"
                            />
                        </form>
                    )
                }
            </div>
        </header>
    );
};