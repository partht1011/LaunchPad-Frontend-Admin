import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

interface ContractProps {
  contractAddress: string;
  contractABI: string[];
  methodName: string; // Method to call
  methodArgs?: any[]; // Arguments for the method (optional)
  isWrite?: boolean; // True if the method involves a transaction
  onResult?: (result: any) => void; // Callback to handle the result
}

const ContractCp: React.FC<ContractProps> = ({
  contractAddress,
  contractABI,
  methodName,
  methodArgs = [],
  isWrite = false,
  onResult,
}) => {
  const [provider, setProvider] = useState<ethers.JsonRpcProvider | null>(null);
  const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null);
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Initialize provider, signer, and contract
  useEffect(() => {
    const initialize = async () => {
      const rpcProvider = new ethers.JsonRpcProvider(
        'https://mainnet.infura.io/v3/29d66c43dfab4ab7b83e62ed2d587b79'
      );
      let contractRunner: ethers.ContractRunner = rpcProvider;
      // If a private key is provided, create a signer
      // if (privateKey && isWrite) {
      //   const walletSigner = new ethers.Wallet(privateKey, rpcProvider);
      //   contractRunner = walletSigner;
      //   setSigner(walletSigner);
      // }
      const newContract = new ethers.Contract(
        contractAddress,
        contractABI,
        contractRunner
      );

      setProvider(rpcProvider);
      setContract(newContract);
    };

    initialize();
  }, [contractAddress, contractABI, isWrite]);

  // Call contract method
  const callMethod = async () => {
    if (!contract) {
      console.error('Contract is not initialized.');
      return;
    }

    setLoading(true);

    try {
      const method = contract[methodName];
      if (!method) {
        console.error(`Method ${methodName} not found in contract.`);
        return;
      }

      const response = isWrite
        ? await method(...methodArgs).then((tx: ethers.TransactionResponse) =>
            tx.wait()
          )
        : await method(...methodArgs);

      setResult(response);
      if (onResult) onResult(response);
    } catch (error) {
      console.error('Error calling contract method:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={callMethod} disabled={loading}>
        {loading ? 'Processing...' : `Call ${methodName}`}
      </button>
      {result && (
        <div>
          <h4>Result:</h4>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ContractCp;
