import { useMemo } from "react";
import { DrinkCard } from "../components/DrinkCard";
import { useAppStore } from "../stores/useAppStore";

export const FavoritesPage = () => {
    const { favorites } = useAppStore()
    const hasFavorites = useMemo(() => favorites.length > 0, [favorites])
    return (
        <>
            <h1 className="text-6xl font-extrabold">Favoritos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                {
                    hasFavorites ? (
                        favorites.map((drink) => (
                            <DrinkCard
                                key={drink.idDrink}
                                drink={drink}
                            />
                        ))
                    ) : (
                        <p className="my-10 text-center text-2xl">
                            No hay favoritos aún
                        </p>
                    )
                }
            </div>
        </>
    );
};