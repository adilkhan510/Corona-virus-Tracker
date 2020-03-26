import React , { useState, useEffect } from "react";
import axios from 'axios'

const useData = (name, data) =>{
    data.filter((d)=>{
        if(data.country === name){
            return d ;
        }
    })
}

export default useData;