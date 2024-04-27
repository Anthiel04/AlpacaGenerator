import AlpacaJSON from "./Alpaca.json";
const Alpaca:any = AlpacaJSON;

export default function ({onClick}:any){
    return <>{Object.keys(Alpaca).map((key,index)=> (
        <button
          className="nav"
          value={key}
          onClick={onClick}
          key={index}
        >{key[0].toUpperCase()+key.substring(1)}</button>
      ))}</>
}