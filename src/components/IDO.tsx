import TokenLogo from './TokenLogo';

function IDO() {
  return (
    <div
      className="flex flex-col justify-between w-[350px] h-[480px] px-6 py-6 rounded-2xl border border-grey-light/10 bg-grey-dark font-semibold transform 
                 cursor-pointer hover:drop-shadow-xl hover:-translate-y-2 hover:border-grey-light"
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start">
            <p className="text-3xl text-white font-semibold">SnowCoin</p>
            <span className="mt-2 px-2 py-[1px] rounded-full bg-pink/20 text-sm text-pink">
              Upcoming
            </span>
          </div>
          <TokenLogo />
        </div>
        <p className="mt-3 h-20 font-normal text-grey-normal overflow-clip">
          Introducing Snowcoin, where woofs meet wealth in the world of meme
          tokens! Revolutionizing the memepaw game with cutting-edge doggy
          calculations, crafting the most bark-tastic smart contract known to
          dogkind!
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between mt-4">
          <p className="text-grey-light">Cap</p>
          <p className="text-grey-bright">200 000 000</p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-grey-light">Start Time</p>
          <p className="text-grey-bright">24 Jun, 14:00 UTC</p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-grey-light">End Time</p>
          <p className="text-grey-bright">25 Jun, 13:00 UTC</p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-grey-light">Calim Time</p>
          <p className="text-grey-bright">25 Jun, 18:00 UTC</p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="text-grey-light">Price</p>
          <p className="text-grey-bright">1 SNW = 0.01 USDT</p>
        </div>
        <p className="text-right text-grey-light mt-4">0%</p>
        <span className="w-full h-3 mt-2 rounded-full bg-grey-bright/10"></span>
      </div>
    </div>
  );
}

export default IDO;
