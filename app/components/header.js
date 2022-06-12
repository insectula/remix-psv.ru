import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import RussiaIcon from './map';
import AvTimerIcon from '@mui/icons-material/AvTimer';

export default function Header() {
  return (
      <>
        <div className="column" style={{marginTop: '30px',textAlign:'center',alignItems:'center', justifyContent: 'center'}}>
          <h1> Промышленные системы вентиляции </h1>
          <h2 style={{fontSize:'1rem',fontWeight:'400',width:'75%', marginLeft:'auto', marginRight:'auto'}}>
          Производство и поставка щитов автоматики для управления системами противодымной вентиляции. 
          Производим и поставляем клапаны систем вентиляции в следующих исполнениях.  
          Поставляем вентиляторы дымоудаления, подпора, радиальные вентиляторы. 
          Электроприводы для противопожарных и воздушных клапанов.
          </h2>
        </div>
        <div style={{marginTop: '25px', display: 'flex',  justifyContent: 'center', alignItems: 'center',fontWeight: 400}}>
            <RussiaIcon sx={{color:'#ff6429'}} fontSize='medium'/>
            <span style={{marginLeft: '5px', marginRight: '35px'}}>Работаем по РФ</span>  
            <HandshakeOutlinedIcon sx={{color:'#ff6429'}} fontSize='medium'/>
            <span style={{marginLeft: '5px', marginRight: '35px'}}>Индивидуальные скидки для компаний партнёров</span>
            <AvTimerIcon sx={{color:'#ff6429'}} fontSize='medium'/>
            <span style={{marginLeft: '5px', marginRight: '-90px'}}>Короткие сроки производства</span>
        </div>
      </>
  );
}
