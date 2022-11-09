import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(()=> {
        document.title = `${title} - IELTS Hub`;
    }, [title])
}

export default useTitle;