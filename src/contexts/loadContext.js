import React, { useState, createContext } from 'react';

export const LoadContext = createContext();

const LoadContextProvider = (props) => {

    const initialLoadState = {
        isLoading: false,
        RequestErrorMsg: '',
        RequestSuccess: false,
        RequestSuccessMsg: "", 
    }

    const [pageload, setPageload] = useState(initialLoadState);

    const onPageload = () => setPageload({...pageload, isLoading: true});
    const onError = (param) => setPageload({...pageload, isLoading: false, RequestErrorMsg: param});
    const clearError = () => setPageload({...pageload, RequestErrorMsg: ""});
    const onComplete = (param = "") => setPageload({...pageload, isLoading: false, RequestSuccess: true, RequestSuccessMsg: param});
    const loadReset = () => setPageload({...pageload, isLoading: false});
    
    return(
        <LoadContext.Provider value={{ pageload, onPageload, onError, clearError, onComplete, loadReset }}>
            {props.children}
        </LoadContext.Provider>
    )    
}
export default LoadContextProvider