import React, {useState, useContext, useEffect} from 'react';
import { useCallback } from 'react';
const URL = "https://fakestoreapi.com/products";
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState("the lost world");
    const [clothes, setClothes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");

    const fetchClothes = useCallback(async() => {
        setLoading(true);
        try{
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json();
            const {docs} = data;

            if(docs){
                const newClothes = docs.slice(0, 20).map((clothesSingle) => {
                    const {key, title, price, category, description, image} = clothesSingle;

                    return {
                        id: key,
                        title: title,
                        price: price,
                        category: category,
                        description: description,
                        image: image
                    }
                });

                setClothes(newClothes);

                if(newClothes.length > 1){
                    setResultTitle("Your Search Result");
                } else {
                    setResultTitle("No Search Result Found!")
                }
            } else {
              setClothes([]);
                setResultTitle("No Search Result Found!");
            }
            setLoading(false);
        } catch(error){
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchClothes();
    }, [searchTerm, fetchClothes]);

    return (
        <AppContext.Provider value = {{
            loading, clothes, setSearchTerm: (term) => setSearchTerm(term), resultTitle, setResultTitle,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};