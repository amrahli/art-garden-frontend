import React from "react"
import ReactMarkdown from "react-markdown"
import getContent from 'resources/translations'

const translations = getContent("footer","az")

const Footer: React.FC = () => {
    return(
      <footer>
        <ReactMarkdown>{translations?.copyright}</ReactMarkdown>
      </footer>
    )
}

export default Footer;