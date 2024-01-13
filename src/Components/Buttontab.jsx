let Buttontab = ({ cityname,handalonclink}) => {
  return (
    <>
     {cityname.map((city)=><button className="btn" onClick={()=>handalonclink(city)}>{city}</button>)}
        
    </>
  );
};
export default Buttontab;
