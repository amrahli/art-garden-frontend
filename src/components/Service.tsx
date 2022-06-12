import React from 'react'
import {useState} from 'react'
import ModalService from "../components/Modal-Service";
import { baseUrl } from 'resources/api-constants'

interface Service {
  Name: string;
  Icon: string;
  Slug?: string;
  Description?: string;
}



const Service: React.FC<Service> = ({Name,Icon,Slug,Description}) => {

    return (
        <div className="service">
            <a href="" >
                <img src={Icon} alt="" />
                <span>{Name}</span>

            </a>
        </div>
    )
}

export default Service
