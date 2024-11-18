import logo from './../assets/imgs/coin.jpg';
function TokenLogo() {
  return (
    <div className="w-[80px] h-[80px] rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
      <img src={logo} alt="Avatar" className="w-full h-full object-cover" />
    </div>
  );
}

export default TokenLogo;
