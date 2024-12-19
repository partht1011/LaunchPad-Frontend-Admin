import { useState } from 'react';
import IPFSLogo from '../components/IPFSLogo';
import StepLetter from '../components/StepLetter';
import Input from '../components/Input';
import { getIDOFactory } from '../utils/ethersUtil';
import { ethers } from 'ethers';
function CreateIDO() {
  // Sale Token Info State Variables
  const [symbol, setSymbol] = useState('DOG');
  const [name, setName] = useState('DOG');
  const [initialSupply, setInitialSupply] = useState(
    ethers.parseEther('10000').toString()
  );
  const [metaData, setMetaData] = useState('');

  // Sale Info State Variables
  const [price, setPrice] = useState(ethers.parseEther('0.1').toString());
  const [softCap, setSoftCap] = useState(ethers.parseEther('1').toString());
  const [hardCap, setHardCap] = useState(ethers.parseEther('5').toString());
  const [buyAddr, setBuyAddr] = useState(
    '0x0e85D4ab1f522cE66D0Db5867E9B6edA55c0847C'
  );

  // Time Stamp State Variables
  const [startTime, setStartTime] = useState(
    Date.now() - 1000 * 60 * 60 * 24 * 5 + ''
  );
  const [endTime, setEndTime] = useState(
    Date.now() - 1000 * 60 * 60 * 24 * 3 + ''
  );
  const [claimTime, setClaimTime] = useState(
    Date.now() + 1000 * 60 * 60 * 24 * 1 + ''
  );

  // Sale Token Description State Variable
  const [description, setDescription] = useState(
    'Innovative and secure digital asset with the ability to mint, sell, and transfer tokens on a blockchain.'
  );

  const onCreateIDO = async () => {
    try {
      const IDOFactory = await getIDOFactory();

      const tx = await IDOFactory.createIDOPool(
        buyAddr,
        [symbol, name, initialSupply, metaData, description],
        [price, softCap, hardCap, price],
        [startTime, endTime, claimTime]
      );
      await tx.wait();
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <main className="flex flex-col flex-grow items-center mt-[100px] px-[200px]">
      <StepLetter />

      <div className="mt-5 flex gap-4">
        {/* Sale Token Info */}
        <div className="flex flex-col gap-4 w-[480px] mt-5 p-6 rounded-2xl border border-grey-light/10 bg-grey-dark">
          <p className="text-center font-semibold text-grey-light text-2xl">
            Sale Token Info
          </p>
          <IPFSLogo
            onChange={(meta) => {
              setMetaData(meta);
            }}
          />
          <Input
            label={'Symbol'}
            value={symbol}
            onChange={(e: any) => setSymbol(e.target.value)}
          />
          <Input
            label={'Name'}
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />
          <Input
            label={'Initial Supply'}
            value={initialSupply}
            onChange={(e: any) => setInitialSupply(e.target.value)}
          />
        </div>
        {/* Sale Info */}
        <div className="flex flex-col gap-4 w-[480px] mt-5 p-6 rounded-2xl border border-grey-light/10 bg-grey-dark">
          <p className="text-center font-semibold text-grey-light text-2xl">
            Sale Info
          </p>

          <Input
            label={'Token Price'}
            value={price}
            onChange={(e: any) => setPrice(e.target.value)}
          />
          <Input
            label={'Soft Cap'}
            value={softCap}
            onChange={(e: any) => setSoftCap(e.target.value)}
          />
          <Input
            label={'Hard Cap'}
            value={hardCap}
            onChange={(e: any) => setHardCap(e.target.value)}
          />
          <Input
            label={'Buy Token Address'}
            value={buyAddr}
            onChange={(e: any) => setBuyAddr(e.target.value)}
          />
        </div>
        {/* Time Info */}
        <div className="flex flex-col gap-4 w-[480px] mt-5 p-6 rounded-2xl border border-grey-light/10 bg-grey-dark">
          <p className="text-center font-semibold text-grey-light text-2xl">
            Time Info
          </p>
          <Input
            label={'Start Time'}
            value={startTime}
            onChange={(e: any) => setStartTime(e.target.value)}
          />
          <Input
            label={'End Time'}
            value={endTime}
            onChange={(e: any) => setEndTime(e.target.value)}
          />
          <Input
            label={'Claim Time'}
            value={claimTime}
            onChange={(e: any) => setClaimTime(e.target.value)}
          />

          <p className="text-center font-semibold text-grey-light text-2xl">
            Sale Token Desc
          </p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter your information"
            className="w-full h-20 p-2 rounded-lg bg-dark border border-grey-bright/10 text-white placeholder-white/10  outline-none focus:border-grey-bright/50"
          />
        </div>
      </div>
      <div className="flex mt-10 items-center">
        <button
          className="px-6 py-2 rounded-xl bg-grey-bright font-bold text-primary text-[18px]"
          onClick={onCreateIDO}
        >
          Create IDO
        </button>
      </div>
    </main>
  );
}

export default CreateIDO;
