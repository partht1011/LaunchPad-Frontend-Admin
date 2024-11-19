import { useState } from 'react';
import { connectWallet } from '../utils/ethersUtil';

function Header() {
  const [connectedAddress, setConnectedAddress] = useState('');
  async function onConnectCliked() {
    if (window.ethereum) {
      const address = await connectWallet();
      setConnectedAddress(address);
    } else {
      alert('Please install MetaMask!');
    }
  }
  return (
    <header className="order-0 fixed left-0 top-0 w-full h-[80px] flex items-center justify-between px-[200px] bg-primary drop-shadow-xl">
      <h1 className="text-3xl text-white font-bold">
        Launch<span className="text-yellow">P</span>ad
      </h1>
      <nav>
        <a
          href="#/ido"
          className="mr-5 px-6 py-2 rounded-full border-yellow font-semibold text-yellow text-[18px] 
                    hover:bg-yellow hover:text-primary active:bg-yellow-light"
        >
          IDOs
        </a>
        <a
          href="#/blacklist"
          className="mr-5 px-6 py-2 rounded-full border-yellow font-semibold text-yellow text-[18px] 
                    hover:bg-yellow hover:text-primary active:bg-yellow-light"
        >
          Blacklist
        </a>
        <button
          className="px-6 py-2 rounded-full border border-yellow font-semibold text-yellow text-[18px]"
          onClick={onConnectCliked}
        >
          {connectedAddress ? connectedAddress : 'Connect Wallet'}
        </button>
      </nav>
    </header>
  );
}

export default Header;
