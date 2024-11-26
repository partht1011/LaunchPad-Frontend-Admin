import { useEffect, useState, useCallback } from 'react';
import { getIDOFactory } from '../utils/ethersUtil';

const BlackList: React.FC = () => {
  const [address, setAddress] = useState<string>('');
  const [data, setData] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const getBlackList = useCallback(async () => {
    try {
      const IDOFactory = await getIDOFactory();
      const tx = await IDOFactory.getBlacklistAddresses();
      setData(tx);
    } catch (error: any) {
      setError('Failed to fetch blacklist addresses.');
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getBlackList();
  }, [getBlackList]);

  const addBlackList = async () => {
    if (!address) {
      alert('Please enter an address.');
      return;
    }

    try {
      const IDOFactory = await getIDOFactory();
      const tx = await IDOFactory.addToBlacklist(address);
      await tx.wait();
      setAddress(''); // Clear the input after adding
      getBlackList();
    } catch (error: any) {
      setError('Failed to add address to blacklist.');
      console.error(error);
    }
  };

  const removeBlackList = async (account: string) => {
    try {
      const IDOFactory = await getIDOFactory();
      const tx = await IDOFactory.removeFromBlacklist(account);
      await tx.wait();
      getBlackList();
    } catch (error: any) {
      setError('Failed to remove address from blacklist.');
      console.error(error);
    }
  };

  return (
    <main className="flex flex-col flex-grow items-center mt-[100px] px-[200px] text-white">
      <div className="mt-5 flex flex-col w-[800px] ">
        <div className="flex justify-between">
          <h2 className="text-grey-bright font-bold text-4xl">Black List</h2>
          <div className="flex items-center gap-4">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter the address to block"
              className="w-[380px] px-2 py-1 rounded-lg bg-dark border border-grey-bright/10 text-white placeholder-white/10 outline-none focus:border-grey-bright/50"
            />
            <button
              className="w-16 h-8 rounded-full bg-green/20 text-green font-semibold items-center"
              onClick={addBlackList}
            >
              Add
            </button>
          </div>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {data.length > 0 && (
          <ul className="mt-5 flex flex-col gap-2">
            {data.map((account, index) => (
              <li
                key={index}
                className="flex items-center justify-between px-4 py-2 w-full rounded-xl border border-grey-light/10 bg-grey-dark "
              >
                <p className="font-semibold text-lg text-grey-light">
                  {account}
                </p>
                <button
                  className="px-3 py-1 rounded-full bg-pink/20 font-semibold text-pink text-sm"
                  onClick={() => removeBlackList(account)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
};

export default BlackList;
