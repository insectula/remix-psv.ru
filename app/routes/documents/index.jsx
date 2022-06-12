import {Outlet} from "@remix-run/react";

export default function () {
    return(
        <>
            <div className="pageTitle">
                <span style={{fontSize: '30px'}}>Документация и каталоги</span>
            </div>


                {/*<div style={{display: 'flex', flexDirection: 'column', justifyContent:'center', border: '1px solid #edf0f6', width: '250px'}}>
                <Catalog position='second' handleClick={handleCategory} />
                </div>*/}
                <Outlet />

        </>
    );
}