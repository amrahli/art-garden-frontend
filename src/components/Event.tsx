import React from "react";
import getContent from 'resources/translations'

interface Props {
  Name: string;
  CoverImage: string;
  Slug: string;
  Date: Date;
  Description?: string;
}

const translations = getContent("events","az")


const Event: React.FC<Props> = ({ Name, CoverImage, Date,  Slug, Description }) => {
  return (
      <div className="event-container card">
          <div className="event">
              <div className="event-image">
                  <img src={ CoverImage ? CoverImage:"https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png" } alt={Name} />
              </div>
              <div className="event-name card-title">{Name}</div>
              <div className="button-container">
                  <a className="button button-default" href={"/events/"+Slug}>{translations.more}</a>
              </div>
          </div>
      </div>
  )
}

export default Event;