import { useState,useEffect } from "react";
import {Link, Outlet, useLocation, useOutletContext} from "@remix-run/react";
import SettingsIcon from '@mui/icons-material/Settings';
import { Fade } from "@mui/material";
import categories from './../goods/categories';
import Header from './../components/header';

export default function () {
    const [cartItems, setCartItems] = useOutletContext();
    const [item, setItem] = useState('');
    const [subCat, setSubCat] = useState([]);
    const [displaySubCat, setDisplaySubCat] = useState(false);
    const location = useLocation();
    let timeout;

    const handleItem = (item, category) => {
        console.log('handleItem')
        category && setSubCat(category);
        item && setItem(item);
        setDisplaySubCat(true);
    }
    const clearItem = () => {
        console.log('clearItem')
        setDisplaySubCat(false);
    }

    useEffect(()=>{console.log(location);},[])
    const Category = (props) => {
        return (<>
        <Link to={'/catalog/'+ props.value.listName} replace={true}><button onMouseOver={() => handleItem(props.value.listName, props.value.subCategories)} onMouseLeave={clearItem} key={props.key} className='category'>
            <SettingsIcon sx={{color:"#555"}} fontSize='large'/>
            <div className='categoryName'> {props.value.listName} </div><div style={{position:'absolute',width:'100%',height:'35px', bottom:'-30px', backgroundColor: 'rgba(255,255,255,.005)'}}/>
            <Fade in={displaySubCat}><div className='subCatSelector column' style={{display: (props.value.listName === item && subCat !== [])?'flex':'none'}}>{subCat !== [] && subCat.map((category, key) => {
                                            return (
                                                <button className='subCategory'>
                                                    <div className='subCategory-helper'/>
                                                    {category.listName}
                                                </button>
                                            )
                                        })
                                    }
            </div></Fade>
        </button></Link>
        
        </>)
    }
    return(
        <>
            <Header/>
            <div className="pageTitle">
                <span style={{fontSize: '30px', marginBottom: '25px'}}>Каталог продукции</span>
            </div>

            <div style={{display: 'flex', justifyContent: 'center', margin: '0', marginLeft:'-55px', marginRight:'-55px', backgroundColor:'#edf0f6'}}>
            <div className="categorySelector">
                    {categories.map((value, key) => {
                        return (<Category value={value} key={key}/>)
                    })}
                </div>
            </div>

                <Outlet context={[cartItems, setCartItems]}/>

        </>
    );
}