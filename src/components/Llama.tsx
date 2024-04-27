import AlpacaJSON from "./Alpaca.json";
const Alpaca:any = AlpacaJSON;

export default function Llama({state}:any) {
  return (
    <>
      {Object.keys(Alpaca).map((key,index) => (
              <div
                className={"part " + key}
                style={{ backgroundImage: state[key] 
                }}
                key = {index}
              />
            ))}
    </>
  );
}
