import React from "react";
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
export const ItensContext = createContext({});
function ItensProvider({ children }) {
    const [photos, setPhotos] = useState([]);
    const [selectedPhotos, setSelectedPhoto] = useState(undefined);
    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/jessicasiiq/API-desafiofinal-gobeyond/sliders')
            .then(response => {
            setPhotos(response.data);
            setSelectedPhoto(response.data[0]);
        });
    }, []);
    return (React.createElement(ItensContext.Provider, { value: { photos, selectedPhotos, setSelectedPhoto } }, children));
}

export default ItensProvider;