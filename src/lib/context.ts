import { createContext } from "svelte";
import type { Theme } from "./themes";

export const [getTheme, setTheme] = createContext<() => Theme | undefined>();
