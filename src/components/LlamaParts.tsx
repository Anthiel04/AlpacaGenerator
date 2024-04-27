import AlpacaJSON from "./Alpaca.json";
const Alpaca:any = AlpacaJSON;

export default function LlamaParts({view,onClick}:any){
    return <>{Alpaca[view].map((url:any,index:number) => (
        <input
          type="radio"
          className="changeButton"
          value={view}
          style={{ backgroundImage: `url(${url})` }}
          onClick={onClick}
          key={index.toString()}
        />
      ))}</>
}