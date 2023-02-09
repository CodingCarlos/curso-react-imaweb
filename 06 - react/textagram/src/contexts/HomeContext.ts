import { Dispatch, SetStateAction, createContext } from "react";
import { IPost } from "../interfaces";

const HomeContext = createContext<[
    IPost[], 
    Dispatch<SetStateAction<IPost[]>>
]>([
    [],
    () => []
]);

export default HomeContext;