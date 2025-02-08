import { useEffect } from "react";

function HomeRedirect(){
    useEffect(() => {
        window.location.href='./src/pages/home/Sandraeleela.html'
    }, [])

    return <div>Redirecionando...</div>
}

export default HomeRedirect