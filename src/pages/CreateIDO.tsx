import IPFSLogo from '../components/IPFSLogo';
import StepModifier from '../components/StepModifier';
import TokenLogo from '../components/TokenLogo';

function CreateIDO() {
  return (
    <main className="flex flex-col flex-grow items-center mt-[100px] px-[200px]">
      <StepModifier />

      <div className="mt-5 flex gap-4">
        {/* Buy Token Info */}
        <div className="flex flex-col gap-4 w-[480px] mt-5 p-6 rounded-2xl border border-grey-light/10 bg-grey-dark">
          <p className="pb-5 text-center font-semibold text-grey-light text-2xl">
            Buy Token Info
          </p>
          <IPFSLogo />
          <div className="flex items-center justify-between">
            <label className="text-grey-bright font-semibold">Symbol</label>
            <input
              type="text"
              placeholder="Enter your information"
              className="w-64 p-2 rounded-lg bg-dark border border-grey-bright/10 text-white placeholder-white/10  outline-none focus:border-grey-bright/50"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="text-grey-bright font-semibold">Name</label>
            <input
              type="text"
              placeholder="Enter your information"
              className="w-64 p-2 rounded-lg bg-dark border border-grey-bright/10 text-white placeholder-white/10  outline-none focus:border-grey-bright/50"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="text-grey-bright font-semibold">
              Initial Supply
            </label>
            <input
              type="text"
              placeholder="Enter your information"
              className="w-64 p-2 rounded-lg bg-dark border border-grey-bright/10 text-white placeholder-white/10  outline-none focus:border-grey-bright/50"
            />
          </div>
        </div>
        {/* Sale Token Info */}
        <div className="flex flex-col gap-4 w-[480px] mt-5 p-6 rounded-2xl border border-grey-light/10 bg-grey-dark">
          <p className="pb-5 text-center font-semibold text-grey-light text-2xl">
            Sale Info
          </p>
          <div className="flex items-center justify-between">
            <label className="text-grey-bright font-semibold">
              Token Price
            </label>
            <input
              type="text"
              placeholder="Enter your information"
              className="w-64 p-2 rounded-lg bg-dark border border-grey-bright/10 text-white placeholder-white/10  outline-none focus:border-grey-bright/50"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="text-grey-bright font-semibold">Soft Cap</label>
            <input
              type="text"
              placeholder="Enter your information"
              className="w-64 p-2 rounded-lg bg-dark border border-grey-bright/10 text-white placeholder-white/10  outline-none focus:border-grey-bright/50"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="text-grey-bright font-semibold">Hard Cap</label>
            <input
              type="text"
              placeholder="Enter your information"
              className="w-64 p-2 rounded-lg bg-dark border border-grey-bright/10 text-white placeholder-white/10  outline-none focus:border-grey-bright/50"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="text-grey-bright font-semibold">
              Buy Token Address
            </label>
            <input
              type="text"
              placeholder="Enter your information"
              className="w-64 p-2 rounded-lg bg-dark border border-grey-bright/10 text-white placeholder-white/10  outline-none focus:border-grey-bright/50"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="text-grey-bright font-semibold">
              Sale Token Address
            </label>
            <input
              type="text"
              placeholder="Enter your information"
              className="w-64 p-2 rounded-lg bg-dark border border-grey-bright/10 text-white placeholder-white/10  outline-none focus:border-grey-bright/50"
            />
          </div>
        </div>
        {/* Time Info */}
        <div className="flex flex-col gap-4 w-[480px] mt-5 p-6 rounded-2xl border border-grey-light/10 bg-grey-dark">
          <p className="pb-5 text-center font-semibold text-grey-light text-2xl">
            Time Info
          </p>
          <div className="flex items-center justify-between">
            <label className="text-grey-bright font-semibold">Start Time</label>
            <input
              type="text"
              placeholder="Enter your information"
              className="w-64 p-2 rounded-lg bg-dark border border-grey-bright/10 text-white placeholder-white/10  outline-none focus:border-grey-bright/50"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="text-grey-bright font-semibold">End Time</label>
            <input
              type="text"
              placeholder="Enter your information"
              className="w-64 p-2 rounded-lg bg-dark border border-grey-bright/10 text-white placeholder-white/10  outline-none focus:border-grey-bright/50"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="text-grey-bright font-semibold">Claim Time</label>
            <input
              type="text"
              placeholder="Enter your information"
              className="w-64 p-2 rounded-lg bg-dark border border-grey-bright/10 text-white placeholder-white/10  outline-none focus:border-grey-bright/50"
            />
          </div>
        </div>
      </div>
      <div className="flex mt-10 items-center">
        <button className="px-6 py-2 rounded-xl bg-grey-bright font-bold text-primary text-[18px]">
          Create IDO
        </button>
      </div>
    </main>
  );
}

export default CreateIDO;
