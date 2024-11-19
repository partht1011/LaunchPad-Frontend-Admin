// src/utils/ethers.js
import { ethers } from 'ethers';
import IDOFactoryABI from '../store/IDOFactory.json'; // Import your contract ABI
import { IDOFactoryAddress } from '../store/contract';

const connectWallet = async () => {
    if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        if (accounts.length > 0) {
            return accounts[0];
        }
    } else {
        alert('Please install MetaMask!');
    }
    return undefined
};

const provider = new ethers.BrowserProvider(window.ethereum);
const getIDOFactory = async () => {
    const signer = await provider.getSigner();

    const IDOFactory = new ethers.Contract(IDOFactoryAddress, IDOFactoryABI, signer);
    return IDOFactory;
}

export { getIDOFactory, connectWallet };
