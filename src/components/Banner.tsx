import React,{useState,useEffect} from "react"
import qs from 'qs'
import axios from 'axios'


const url = "/images/art-is-everywhere.jpg";

const Banner: React.FC = () => {
    const [banner,setBanner] = useState(null)
    useEffect(() => {
        async function fetchEvents() {
            const data = await axios.get(`www.google.com`)
            setBanner(data?.data.data)
            console.log(data?.data.data)
        }
        fetchEvents()
    }, [])

    return(
          <div className="banner" style={{backgroundImage:"url("+url+")"}}>
              <div className="layer">
                    <p className="slogan">Show your talent1!</p>
                    <div className="button-box">
                        <button className='button button-default'>JOIN US</button>
                    </div>
              </div>
                <div>

                </div>
          </div>
    )
}

export default Banner;