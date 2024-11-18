import { ethers } from 'ethers';
import { useState } from 'react';
import ContractCp from '../components/ContractCp';

const BlackList = () => {
  const [address, setAddress] = useState();
  const onAddressChange = (e: any) => {
    setAddress(e.target.value);
  };
  const addBlackList = () => {};
  return (
    <main className="flex flex-col flex-grow items-center mt-[100px] px-[200px]">
      <div className="mt-5 flex flex-col w-[800px] ">
        <div className="flex justify-between">
          <h2 className="text-grey-bright font-bold text-4xl">Black List</h2>
          <div className="flex items-center gap-4">
            <input
              type="text"
              value={address}
              onChange={onAddressChange}
              placeholder="Enter the address to block"
              className="w-64 px-2 py-1 rounded-lg bg-dark border border-grey-bright/10 text-white placeholder-white/10  outline-none focus:border-grey-bright/50"
            />
            <button
              className=" w-6 h-6 rounded-full bg-green items-center"
              onClick={addBlackList}
            ></button>
          </div>
        </div>
        <ul className="mt-5 flex flex-col gap-2">
          <ContractCp
            contractAddress="0xYourContractAddress"
            contractABI={[
              'function balanceOf(address owner) view returns (uint256)',
            ]}
            methodName="balanceOf"
            methodArgs={['0xYourWalletAddress']}
            isWrite={false}
            onResult={(result: any) =>
              console.log('Balance:', ethers.formatEther(result))
            }
          ></ContractCp>
          <li className="flex items-center justify-between px-4 py-2 w-full rounded-xl border border-grey-light/10 bg-grey-dark ">
            <p className="font-semibold text-lg text-grey-light">
              0xF8F76292bE3Df8723059e72051C110C630EEBF29
            </p>
            <span className="px-3 py-1 rounded-full bg-grey-normal/20 font-bold text-grey-normal text-sm">
              Blacklisted
            </span>
          </li>
          <li className="flex items-center justify-between px-4 py-2 w-full rounded-xl border border-grey-light/10 bg-grey-dark ">
            <p className="font-semibold text-lg text-grey-light">
              0xF8F76292bE3Df8723059e72051C110C630EEBF29
            </p>
            <span className="px-3 py-1 rounded-full bg-grey-normal/20 font-bold text-grey-normal text-sm">
              Blacklisted
            </span>
          </li>
          <li className="flex items-center justify-between px-4 py-2 w-full rounded-xl border border-grey-light/10 bg-grey-dark ">
            <p className="font-semibold text-lg text-grey-light">
              0xF8F76292bE3Df8723059e72051C110C630EEBF29
            </p>
            <span className="px-3 py-1 rounded-full bg-grey-normal/20 font-bold text-grey-normal text-sm">
              Blacklisted
            </span>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default BlackList;
