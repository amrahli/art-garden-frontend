import React,{useState,useEffect} from "react"
import qs from 'qs'
import axios from 'axios'
import { baseUrl, getServiceFields,getProjects } from 'resources/api-constants'

const url = "/images/art-is-everywhere.jpg";

const Banner: React.FC = () => {


    const [banner,setBanner] = useState<any>()

    const query = qs.stringify({
        populate: '*',
        fields: '*'
    })

    useEffect(() => {
        async function fetchEvents() {
            const data = await axios.get(`${baseUrl}/api/home-page?${query}`)
            setBanner(data?.data.data)
            console.log(data?.data.data)
        }
        fetchEvents()
    }, [])

    return(
          <div className="banner" style={{backgroundImage:"url("+banner?.attributes?.BannerImage+")"}}>
              <div className="layer">
                    <p className="slogan">{banner?.attributes?.Slogan}</p>
                    <div className="button-box">
                        <a id="banner-button" href={banner?.attributes?.ButtonUrl} className='button button-default'>{banner?.attributes?.ButtonText}</a>
                    </div>
              </div>
                <div>

                </div>
          </div>
    )
}

export default Banner;