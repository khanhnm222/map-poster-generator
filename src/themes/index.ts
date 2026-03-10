import type { MapTheme } from "../types/theme";

const modules = import.meta.glob<{ default: MapTheme }>("./*.json", {
    eager: true,
});

export const themes: MapTheme[] = Object.values(modules).map(
    (m) => m.default
);