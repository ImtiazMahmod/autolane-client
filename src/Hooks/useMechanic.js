import  { useEffect, useState } from 'react';

const useMechanic = () => {
    const [mechanics, setMechanics] = useState([]);
    useEffect(() => {
        fetch('./FakeData/mechanics.json')
            .then(res => res.json())
        .then(data=> setMechanics(data))
    },[])
    return [mechanics];
};

export default useMechanic;