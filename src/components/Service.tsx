import React from 'react'
import { useState } from 'react'
import ModalService from '../components/Modal-Service'
import { baseUrl } from 'resources/api-constants'

interface Service {
    Name: string
    Icon: string
    Slug?: string
    Description?: string
}

const Service: React.FC<Service> = ({ Name, Icon, Slug, Description }) => {
    const [visible,setVisible] = useState<string>("hide")

    const showModal = ()=>{

        setVisible(visible==="show"?"hide":"show")
    }

    return (
        <div className="service">
            <div className="service-item" onClick={showModal}>
                <img src={Icon} alt="" />
                <span>{Name}</span>
            </div>
            <div className={'modal service-modal '+visible}>
                <div className="modal-body">
                    <span
                        className="close-button"
                        onClick={() => {
                            setVisible("hide")
                        }}
                    >
                        &times;
                    </span>
                    <div className="modal-header">
                        <h2>{Name}</h2>
                    </div>
                    <div className="modal-content">
                        <p>
                            {Description}
                        </p>
                    </div>
                    <div className="modal-footer"></div>
                </div>
            </div>
        </div>
    )
}

export default Service
