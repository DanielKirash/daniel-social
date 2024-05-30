import { createContext } from "react";
import { Tpost } from "../types.ts/commontypes";

export interface IAppContext {
  jsonData: Tpost[] | undefined;
  setJsonData: (args: Tpost[]) => void;
  checked: boolean;
  setChecked: (args: boolean) => void;
}

export const AppContext = createContext<IAppContext | null>(null);
