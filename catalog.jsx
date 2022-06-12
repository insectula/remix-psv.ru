import Goods from '../components/goods';

export default function каталог(props) {
    const category=props.category
    return(
        <>
            <div style={{marginTop: '55px',display: 'flex', justifyContent: 'center', fontWeight: 600}}>
                <span style={{fontSize: '30px', fontWeight: 600}}>Каталог продукции</span>
            </div>

            <div className="sidebar" style={{marginTop: '55px',display: 'flex', justifyContent: 'space-between', fontWeight: 600}}>
                {/*<div style={{display: 'flex', flexDirection: 'column', justifyContent:'center', border: '1px solid #edf0f6', width: '250px'}}>
                <Catalog position='second' handleClick={handleCategory} />
                </div>*/}
                <Goods category={category}/>
            </div>
        </>
    );
}