import { useState, useEffect } from 'react';
import {Link} from "@remix-run/react";
import categories from './../goods/categories';
export default function Catalog({
    position,
    handleClick,
    catalogClose
}) {
    const [item, setItem] = useState('');

    const handleItem = (e) => {
        const category = e.target.value
        console.log('handleItem')
        category && setItem(category);
    }
    
    const handleClose = () => {
        console.log('handleClose')
        setItem('');
        catalogClose();
    }


    const Category = categories.map((category = {}, key) => {




        const subCatMargin = key * -21;
        return(
            <div key={key} style={{marginLeft: '30px',position:'relative', display: 'flex'}}>
                <button
                    className='catMenu'
                    value={category.listName}
                    onMouseOver={handleItem}
                    onClick={handleClick} 
                    style={{
                        backgroundColor: item === category.listName ? '#edf0f6' : 'transparent'
                    }}>
                    {category.listName}
                    <span value={category.listName} style={{paddingLeft:'20px', justifySelf:'flex-end'}} >▶ &nbsp;</span>
                </button>
                <div style={{background:'white',border:'none', position:'absolute', left:260, top: `${subCatMargin}px`, flexDirection: 'column', alignItems: 'flex-start', display: item === category.listName ? 'flex' : 'none', zIndex: 99}}>
                    {category.subCategories[0].listName !== 'FULL NAME FOR MENU' && category.subCategories.map((subCat, key) => 
                        <button key={key} value={subCat.listName} className='submenu'>
                            {subCat.listName}
                        </button>
                    )}
                </div>
            </div>
        )})



    return (
        <div onMouseLeave={handleClose} style={{

            position: 'absolute',
            top: '50px',
            border: '1px solid #edf0f6',
            borderTop: 'none',
            paddingLeft: '0',
            height: '240px',
            width: '100%',
            zIndex: '99',
            background: 'white',
        }}>
            <Link to="/catalog/"><div style={{
                display: position==='first'?'flex':'none',
                position: 'absolute',
                zIndex: '100',
                top: '-50px',
                left: '-1px',
                width: '160px',
                height: '50px',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '14px',
                color: 'black',
                backgroundColor: 'white',
                borderTop: '1px solid #edf0f6',
                borderLeft: '1px solid #edf0f6',
            }}>
                КАТАЛОГ
                &nbsp;
                <span style={{ fontSize: '8px' }}>
                    ▶
                </span>
            </div></Link>
            <div style={{ marginTop: '15px', display: 'flex' }}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    {Category}
                </div>
            </div>
        </div>
    )
}