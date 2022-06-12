import React, { useEffect } from 'react';
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigate
} from "@remix-run/react";
//import Header from './components/header';
import style from './style.css';
import cssPopular from './components/popular.css';
import { Button } from '@mui/material';
import Catalog from './components/dropdownMenu';
import FeedbackModal from './components/feedbackModal';
import CartModal from './components/cartModal';
import Logo from './assets/SVG/logo.svg';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';



export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const links = () => [
  { rel: "stylesheet", href: style },
  { rel: "stylesheet", href: cssPopular },
];

function useForceUpdate(){
  const [renders, setRenders] = React.useState(0);
  return () => setRenders(renders => renders + 1); // update the state to force render
}


export default function App() {
  const forceUpdate = useForceUpdate();  

  const [dropdown, setDropdown]= React.useState(false);
  const [feedback, setFeedback] = React.useState(false);
  const [cart, setCart] = React.useState(false);
  const [category, setCategory] = React.useState('');
  const [good, setGood] = React.useState('nanotek-lf230-b');

  const [cartItems, setCartItems] = React.useState([]);
  
  const removeItem = (productId) => {
    console.log('remove',productId)
    if (typeof window !== 'undefined') {
    const data = cartItems;
    let products = data.filter(function(product) {return product.productId != productId;});
    console.log('removed, writing state');
    console.log(products);
    setCartItems(products);
    console.log('done, writing storage');
    localStorage.setItem('products', JSON.stringify(products));}
    console.log('forceUpdate');
    forceUpdate()
    console.log('check state', cartItems);
  }
  

  const cartOpen = () => {
    setCart(true)
  }
  const cartClose = () => {
    setCart(false);
  };
  const cartQty = () => {
    let total = 0
    cartItems.map(element => {
      if (isNaN(Number(element.qty))) {
        setCartItems([])
        localStorage.setItem('products', JSON.stringify([]));
        forceUpdate();
      }
      total = Number(element.qty) + total;
    });
    
    return `(${total})`
  }


  const handleCategory = (e) => {
    setCategory(e.target.value)
  }

  const feedbackOpen = () => {
    setFeedback(true);
  };

  const feedbackClose = () => {
    setFeedback(false);
  };
  const catalogOpen = () => {
    setDropdown(true);
  }
  const catalogClose = React.useCallback(
    () => {
      setDropdown(false);
    },
    [],
  );


  useEffect(() => {
    var storageProducts = [];
    if (typeof window !== 'undefined') {
      console.log('getting shopping cart')
      if (localStorage.getItem('products')) {
      storageProducts = JSON.parse(localStorage.getItem('products'));
      setCartItems(storageProducts);
      }
    }
  }, [])

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div style={{position:'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width:'100%'}}>
          <div style={{display: 'flex', flexDirection:'column',margin: 0,padding: 0}}>
            <a href="/"><img style={{height: '50px'}}src={Logo}/></a>
          </div>
          <h4 className='row' style={{color:'#333', fontSize:'13px', lineHeight:1, fontStyle:'italic', textTransform:'uppercase'}}>противопожарные клапаны и вентиляционное<br/> оборудование от производителя</h4>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
            <a href="mailto:fenixklapan@yandex.ru">
              <div style={{marginRight:'40px',display: 'flex', flexDirection:'column',textAlign: 'right'}}>
                <div style={{display: 'flex'}}>
                  <div style={{display: 'flex', flexDirection:'column',padding: 0}}>
                    <h5 style={{margin: 0, padding: 0}}>
                      fenixklapan@yandex.ru
                    </h5>
                  </div>
                </div><div style={{display: 'flex',justifyContent: 'flex-end'}}>
                  <div style={{display: 'flex', flexDirection:'column',padding: 0}}>
                    <span style={{verticalAlign: 'top', padding: 0, marginTop: '3px', fontSize: '.75rem', color: 'grey',}}>
                      электронная почта
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a href="tel:+7(960)067-01-08">
              <div style={{marginRight:'40px', display: 'flex',flexDirection:'column'}}>
                <div style={{display: 'flex'}}>
                  <div style={{display: 'flex', flexDirection:'column',padding: 0}}>
                    <h5 style={{margin: 0, padding: 0}}>
                      +7 (960) 067-01-08
                    </h5>
                  </div>
                </div><div style={{display: 'flex',justifyContent: 'flex-end'}}>
                  <div style={{display: 'flex', flexDirection:'column', alignItems: 'flex-end', padding: 0}}>
                    <span style={{padding: 0, marginTop: '3px', fontSize: '.75rem', color: 'grey',}}>
                      телефон в Москве
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <a href="tel:+7(960)067-01-08">
              <div style={{display: 'flex',marginRight:'40px', flexDirection:'column'}}>
                <div style={{display: 'flex'}}>
                  <div style={{display: 'flex', flexDirection:'column',padding: 0}}>
                    <h5 style={{margin: 0, padding: 0}}>
                      8 (800) 000-00-00
                    </h5>
                  </div>
                </div><div style={{display: 'flex',justifyContent: 'flex-end'}}>
                  <div style={{display: 'flex', flexDirection:'column', alignItems: 'flex-end', padding: 0}}>
                    <span style={{padding: 0, marginTop: '3px', fontSize: '.75rem', color: 'grey',}}>
                      бесплатно по России
                    </span>
                  </div>
                </div>
              </div>
            </a>
            <div style={{justifySelf: 'flex-end', marginLeft:'auto',display: 'flex',flexDirection:'column',textAlign: 'center'}}>
                <Button onClick={feedbackOpen} sx={{width: '180px', height: '35px', fontFamily: 'Roboto',fontWeight: 400, fontSize: '.75rem',borderRadius: 0,color: 'white', backgroundColor: '#ff6429', '&:hover': {backgroundColor: '#d67f06'}}}>отправить заявку</Button>
                <FeedbackModal open={feedback} handleClose={feedbackClose}/>
            </div>
          </div>
        </div>
          <div style={{marginTop: '30px', display: 'flex', }}>
            <div style={{display: 'flex', fontWeight: 400}}>
              <div className='menu' style={{display: 'flex', flexDirection:'column', marginRight:'30px'}}><Link to="/documents">Документация</Link></div>
              <div className='menu' style={{display: 'flex', flexDirection:'column', marginRight:'30px'}}><Link to="/objects">Объекты</Link></div>
              <div className='menu' style={{display: 'flex', flexDirection:'column', marginRight:'30px'}}><Link to="/contacts">Контакты</Link></div>
            </div>
          </div>
        <div style={{ width: '100%',position: 'relative', marginTop: '20px', height: '50px', display: 'flex', alignItems: 'flex-start', justifyContent:'space-between', fontWeight: 600}}>
          <div style={{display: 'flex', justifySelf: 'flex-start'}}>
            <div style={{display: 'flex', flexDirection:'column'}}><Button sx={{width: '160px',height: '50px',fontFamily: 'Roboto',fontWeight: 600, fontSize: '14px', borderRadius: '0',color: 'white', backgroundColor: '#ff6429', '&:hover': {backgroundColor: '#d67f06'}}} onMouseOver={catalogOpen}>Каталог&nbsp;<span style={{fontSize: '8px'}}> ▶</span></Button></div>
            <div style={{display: 'flex'}}><form style={{display: 'flex'}}><label><input className="search" name="search" placeholder="    Поиск категорий или товаров" type="text"/></label><button className="search-btn"><SearchIcon sx={{color:'#777'}}/></button></form></div>
          </div>
          <div style={{display: 'flex', justifySelf: 'flex-end', flexDirection:'column'}}><Button onClick={cartOpen} sx={{width: '180px',height: '50px',fontFamily: 'Roboto',fontWeight: 600, fontSize: '14px',borderRadius: 0,color: 'white', backgroundColor: '#006efb', '&:hover': {backgroundColor: '#0056c5'}}}><ShoppingCartIcon/> Корзина {cartItems.length > 0 && `${cartQty()}`} </Button></div>
          <CartModal open={cart} handleClose={cartClose} removeItem={removeItem} context={[cartItems, setCartItems]}/>
          {dropdown && 
                          <Catalog position='first' handleClick={handleCategory} catalogClose={catalogClose} />
          }
        </div>
        <Outlet context={[cartItems, setCartItems]}/>
        <ScrollRestoration />
        <Scripts />
        {console.log(process.env.NODE_ENV)}
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  );
}
