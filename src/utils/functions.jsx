import React from "react"

import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai"
import { ImFacebook, ImTwitter, ImWhatsapp } from "react-icons/im"
import { MdOutlineMailOutline } from "react-icons/md"
import { FiChevronsLeft } from "react-icons/fi"
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"

export function useIcon(name) {
    switch (name) {
        case "whatsapp":
            return <ImWhatsapp />
        case "facebook":
            return <ImFacebook />
        case "instagram":
            return <AiOutlineInstagram />
        case "twitter":
            return <ImTwitter />
        case "youtube":
            return <AiOutlineYoutube />
        case "email":
            return <MdOutlineMailOutline />
        case "left-chevron":
            return <FiChevronsLeft/>
        case "next":
            return <BsChevronRight/>
        case "prev":
            return <BsChevronLeft/>
        default:
            return <></>
    }
}

export function useInterval(callback, delay) {
    const savedCallback = React.useRef()

    React.useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    React.useEffect(() => {
        const id = setInterval(() => {
            savedCallback.current()
        }, delay)
        return () => clearInterval(id)
    }, [delay])
}
