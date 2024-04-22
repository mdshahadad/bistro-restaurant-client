import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('Menu.json')
            .then(res => res.json())
            .then(data => {
                // const popularItems = data.filter(item => item.category === `${category}`)
                setMenu(data);
                setLoading(false);
            })
    }, [])

    return [menu, loading]
}

export default useMenu;