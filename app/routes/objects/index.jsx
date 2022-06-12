import {Outlet} from "@remix-run/react";
import Popular from "~/components/popular";
import objects from "./objects";

export default function () {
    return(
        <>
            <div className="pageTitle">
                <span style={{fontSize: '30px',}}>Объекты</span>
            </div>

                <Popular>
                {objects.map((item) => { console.log(item); return(
                    <div className="col" style={{width:'20%'}}>
                        <div className="row" style={{height: '33%', width:'100%'}}>
                            <img src={item.image} />
                        </div>
                        <div className="row" style={{fontWeight: 600, flexWrap: 'wrap'}}>
                            {item.title}
                        </div>
                        <div className="row" style={{flexWrap: 'wrap'}}>
                            {item.address}
                        </div>
                    </div>)}) }
                </Popular>
                {/*<div style={{display: 'flex', flexDirection: 'column', justifyContent:'center', border: '1px solid #edf0f6', width: '250px'}}>
                <Catalog position='second' handleClick={handleCategory} />
                </div>*/}
                <Outlet />

        </>
    );
}