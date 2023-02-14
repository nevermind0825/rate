import React from 'react';

export const handleAccordian = (setAccordianArr,newIdx) => {
    setAccordianArr(pre =>{
        const newList = [...pre];
        if (newList.includes(newIdx)) {
            return newList.filter(idx => idx !== newIdx);
        }else{
            return [...newList,newIdx];
        }
    })
    
    
};

