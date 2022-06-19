import React from 'react'
import { useState, useEffect} from 'react'
import qs from 'qs'
import axios from 'axios'
import { baseUrl } from 'resources/api-constants'



const Fields: React.FC = () => {
    const [fields, setFields] = useState([])

    const FieldsQuery = qs.stringify(
        {
            sort: ['id:desc'],
            populate: '*',
            fields: ['Name', 'About', 'Slug'],
            pagination: {
                pageSize: 3,
                page: 1
            },
            publicationState: 'live',
            locale: ['en']
        },
        {
            encodeValuesOnly: true
        }
    )

    useEffect(() => {
        async function fetchProjects() {
            const data = await axios.get(`${baseUrl}/api/service-fields?${FieldsQuery}`)
            setFields(data?.data.data)
            console.log(data.data.data[0].attributes.Images.data[0].attributes.name)
            console.log(data.data.data)
        }
        fetchProjects()
    }, [])


    return (
        <div className="row">
            {/* fields.length>0? <div>salam1</div>:<p>salam2</p> */}
            {fields.map((field:any,index:number) => (
                <div key={index} className="col-12 col-sm-12 col-md-4">
                    <a href={"/about/"+field.attributes.Slug}>
                        <div className="field">
                            <div className="field-image">
                                <img src={field.attributes.Images.data[0].attributes.url} alt="" />
                            </div>
                            <div className="field-name">{field.attributes.Name}</div>
                        </div>

                    </a>
                </div>
            ))}
        </div>
    )
}

export default Fields
