function Header() {
  return (
    <header className="fixed left-0 top-0 w-full h-[80px] flex items-center justify-between px-[200px] bg-primary drop-shadow-xl">
      <h1 className="text-3xl text-white font-bold">
        Launch<span className="text-yellow">P</span>ad
      </h1>
      <nav>
        <a
          href="#"
          className="mr-5 px-6 py-2 rounded-full border-yellow font-semibold text-yellow text-[18px] 
                    hover:bg-yellow hover:text-primary active:bg-yellow-light"
        >
          IDOs
        </a>
        <a
          href="#/wishlist"
          className="mr-5 px-6 py-2 rounded-full border-yellow font-semibold text-yellow text-[18px] 
                    hover:bg-yellow hover:text-primary active:bg-yellow-light"
        >
          Blacklist
        </a>
        <button className="px-6 py-2 rounded-full border border-yellow font-semibold text-yellow text-[18px]">
          Connect Wallet
        </button>
      </nav>
    </header>
  );
}

export default Header;
