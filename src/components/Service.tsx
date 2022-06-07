import React from 'react'
import {useState} from 'react'
import ModalService from "../components/Modal-Service";

interface Service {
  name: string;
  icon: string;
  slug?: string;
  description?: string;
}



const Service: React.FC<Service> = ({name,icon,slug,description}) => {

    return (
        <div className="service">
            <a href="" >
                <img src={icon} alt="" />
                <span>{name}</span>

            </a>
        </div>
    )
}

export default Service
