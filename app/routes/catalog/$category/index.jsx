

import React, { useState, useEffect } from 'react';
import { useOutletContext, useLocation } from "@remix-run/react";
import {
    Button,
    createTheme,
    Typography,
    ThemeProvider,
} from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Switch from '../../../components/switch';
import categories from '../../../goods/categories';
import Filter from '../../../assets/PNG/filter.png';
import { useParams } from "@remix-run/react";

/*export function loader({ params }) {
  const id = params.category;
  return console.log(id)
}

export function action({ params }) {
  const id = params.category;
  return console.log(id)
}*/




const psvTheme = createTheme({
    components: {
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    cursor: "default",
                    "&:hover": {
                        cursor: "default"
                    }
                },
                content: {
                    alignItems: 'center',
                    minHeight: '48px',
                    cursor: "default",
                    "&:hover": {
                        cursor: "default"
                    }
                }
            }
        }
    }
});

function useForceUpdate() {
    const [renders, setRenders] = React.useState(0);
    return () => setRenders(renders => renders + 1); // update the state to force render
}


const HiddenContent = ({ content }) => {
    const [showMore, setShowMore] = useState(false);
    const handleShowMore = () => {
        setShowMore(!showMore);
        !showMore && setTimeout(() => { window.scrollTo({ top: (document.body.scrollHeight / 2), behavior: 'smooth' }) }, 50)
        !showMore && setTimeout(() => { window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }) }, 250)
    }
   

    return (
        <ThemeProvider theme={psvTheme}>
            <MuiAccordion disableGutters={true} square sx={{ margin: 0, padding: 0, boxShadow: 'none', background: 'transparent', cursor: 'default' }}>
                <MuiAccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    onClick={handleShowMore}
                    sx={{ width: 'auto', padding: 0, margin: 0, height: '25px', }}
                >
                    <Typography sx={{ color: '#ff6429', borderBottom: '1px dotted #ccc', cursor: 'pointer', lineHeight: 1, '&:hover': { color: '#555', borderBottom: '1px dotted #ff6429' } }}>{showMore ? 'cкрыть' : 'больше информации'}</Typography>
                </MuiAccordionSummary>
                <MuiAccordionDetails sx={{ margin: 0, padding: 0, display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
                    {
                        Object.entries(content.data).map(([key, value]) => {
                            //console.log(key, value);
                            return (
                                <span key="" style={{ fontSize: '15px', fontWeight: 400 }}>
                                    <span style={{ fontWeight: 600 }}>
                                        {key}: &ensp;
                                    </span>
                                    {value}
                                </span>
                            )
                        })
                    }
                </MuiAccordionDetails>
            </MuiAccordion>
        </ThemeProvider>
    )
}


export default function () {
    const location=useLocation();
    const params = useParams();
    const id = params.category;
    const [cartItems, setCartItems] = useOutletContext();
    const current = categories.find(category => category.listName === id);
    console.log(current.listName);
    console.log(current);
    console.log(current.content);
    const [content, setContent] = useState(current.content[0]);

useEffect(()=> {setContent(current.content[0])},[location])
    const changeProduct = (right) => {
        if (!right || (content&&content === current.content[0])) {
            setContent(current.content[1])
        } else {
            setContent(current.content[0])
        }
    }
    const search = (inputArray, id) => {
        console.log('search')
        for (let i = 0; i < inputArray.length; i++) {
            if (inputArray[i].productId === id) {
                console.log('search done')
                return [inputArray[i], i];
            }
        } console.log('search void')
        return [false, false];
    }
    const addToCart = (event, itemData) => {
        console.log('addToCart')
        let data = []
        if (localStorage.getItem('products')) {
            data = JSON.parse(localStorage.getItem('products'));
        }
        const id = event.target.value;
        console.log(data)
        let [item, key] = search(data, id)
        console.log(itemData)

        if (data.length === 0) {
            data.push({ productId: id, qty: 1, data: itemData })
        } else if (item === false) {
            data.push({ productId: id, qty: 1, data: itemData })
        } else if (item.productId === id) {
            console.log(data[key].qty)
            data[key].qty = isNaN(data[key].qty) ? (1) : (data[key].qty + 1);
        }
        console.log(data)
        setCartItems(data);
        localStorage.setItem('products', JSON.stringify(data));
    }
    console.log('CONTENT=',content)
    return (
        <div style={{ marginTop: '0', marginLeft: '-55px', marginRight: '-55px', paddingBottom: '25px', backgroundColor: '#edf0f6', }}>
            <div style={{
                position: 'relative', zIndex: 50, padding: '30px', display: 'flex', justifySelf: 'flex-start', flexDirection: 'column',
                backgroundImage: `url(${content.picture})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'center right'
            }}>
                <div className='row' style={{ justifyContent: 'center', background: `url(${Filter})`, backgroundSize: '150%' }}>
                    <div style={{
                        minWidth: '80%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '600px'
                    }}>
                        <div style={{ width: '100%', display: 'flex' }}>
                            <span style={{ position: 'relative', zIndex: 50, fontSize: '38px', fontWeight: 600 }}>  {current.displayName}&nbsp;{content.title}  </span>
                        </div>
                        <div className='row' style={{ justifySelf: 'flex-start', width: '100%' }}>
                            <Switch
                                left="Без возвратной пружины"
                                color="warning"
                                right="С возвратной пружиной"
                                callback={changeProduct}
                            />
                        </div>
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                            <span style={{ textAlign: 'left', marginTop: '15px', width: '600px', fontSize: '16px', fontWeight: 400 }}>{current.displayName}&nbsp;<span style={{ fontWeight: 600 }}>{content.title}&nbsp;</span>  {content.description}  </span>
                            <HiddenContent content={content} />
                            <Button value={content.id} onClick={(e) => addToCart(e, content)} sx={{ alignSelf: "flex-start", width: '180px', height: '35px', fontFamily: 'Roboto', fontWeight: 400, fontSize: '.75rem', borderRadius: 0, color: 'white', backgroundColor: '#ff6429', '&:hover': { backgroundColor: '#d67f06' } }}>добавить в корзину</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};