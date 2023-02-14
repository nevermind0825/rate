import React, { useEffect, useRef, useState } from 'react';

const useElementVisiable = (initialVisiable) => {
    const [isVisiable,setIsVisiable] = useState(initialVisiable);
    const elementRef = useRef(null);

    const handleClickOutsideElement = (e) =>{
        if (!elementRef.current.contains(e.target)) {
            setIsVisiable(false);
        }
    }
    const handleClickInSideElement = (e) =>{
            setIsVisiable(true);
        
    }

    useEffect(()=>{
        document.addEventListener("click",handleClickOutsideElement);
        return ()=>{
            document.removeEventListener("click",handleClickOutsideElement);
        }
    },[])

    return {elementRef,isVisiable,setIsVisiable,handleClickInSideElement}
};

export default useElementVisiable;