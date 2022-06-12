import {useState, useEffect} from 'react';
import actuators from '../goods/actuators';

export default function Goods(props) {
    const category = props.category
    const [state, setState] = useState({});

    const dictionary = {
        'КЛАПАНЫ': 'КЛАПАН',
        'ПРОТИВОПОЖАРНЫЕ КЛАПАНЫ': 'КЛАПАН ПРОТИВОПОЖАРНЫЙ',
        'КЛАПАНЫ ДЫМОУДАЛЕНИЯ': 'КЛАПАН ДЫМОУДАЛЕНИЯ',
        'ВЗРЫВОЗАЩИЩЕННЫЕ КЛАПАНЫ': 'КЛАПАН ВЗРЫВОЗАЩИЩЕННЫЙ',
        'ВОЗДУШНЫЕ КЛАПАНЫ АВК': 'КЛАПАН АВК ВОЗДУШНЫЙ',
        'ЭЛЕКТРОПРИВОДЫ': 'ЭЛЕКТРОПРИВОД',
        'ДЛЯ ПРОТИВОПОЖАРНЫХ КЛАПАНОВ': 'ЭЛЕКТРОПРИВОД',
        'ДЛЯ ДЫМОВЫХ КЛАПАНОВ': 'ЭЛЕКТРОПРИВОД',
        'ДЛЯ ВОЗДУШНЫХ КЛАПАНОВ': 'ЭЛЕКТРОПРИВОД',
        'ШУМОГЛУШИТЕЛИ': 'ШУМОГЛУШИТЕЛЬ',
        'ТРУБЧАТЫЕ': 'ШУМОГЛУШИТЕЛЬ ТРУБЧАТЫЙ',
        'ПЛАСТИНЧАТЫЕ': 'ШУМОГЛУШИТЕЛЬ ПЛАСТИНЧАТЫЙ',
        'КОМПЕНСАТОРЫ': 'КОМПЕНСАТОР ЛИНЕЙНЫХ РАСШИРЕНИЙ',
        'МОНТАЖНЫЕ СТАКАНЫ': 'МОНТАЖНЫЙ СТАКАН',
        'УЗЛЫ ПРОХОДА': 'УЗЕЛ ПРОХОДА',
        'ВЫТЯЖНЫЕ ЗОНТЫ': 'ВЫТЯЖНОЙ ЗОНТ',
        'ДЕФЛЕКТОРЫ': 'ДЕФЛЕКТОР',
        'РЕШЁТКИ': 'РЕШЁТКА'
    }

    useEffect(() => {
        
        if (!state || (dictionary[category] === 'ЭЛЕКТРОПРИВОД' && category !== state.category)) {
            console.log('category = actuators');
            setState({
                name: actuators[0].title,
                picture: actuators[0].picture,
                category: category
            });
        }else if (!state || (category !== state.category)) {
            console.log('category != actuators');
            setState({
                name: '',
                picture: '',
                category: category
            });
        }
    },[category]);
    

    return(
        <div style={{display: 'flex', padding: '20px', border: '1px solid #edf0f6', height:'250px', width: '100%', overflow:'hidden'}}>
            <div>
             {dictionary[state.category]} {state.name ? state.name : 'null'}
            </div>
            {state.picture && 
                <div style={{marginLeft:'auto', marginRight:'-40px', width: '300px', height: '250px', background: `url(${state.picture})`, backgroundSize:'cover', backgroundPosition: 'center center'}}/>
            }
        </div>)
    

}