import axios from 'axios';
import FormData from 'form-data';
import { useState } from 'react';

const INFURA_PROJECT_ID = 'snowkey';
const INFURA_PROJECT_SECRET =
  '3Cyihfk6QFKqWlw5TvQrjdca58MNtesXN8H17TpIAmp0ghmdJrJ5tQ';

function IPFSLogo() {
  const [file, setFile] = useState<any | null>(null);
  const [ipfsHash, setIpfsHash] = useState('');

  // Pinata API Keys
  const API_KEY = 'e62eb7a444517ed79b6c';
  const API_SECRET =
    '3a93e413d985e9bf03163cb9e443dce91af4bbe38ac694608c26630354949da0';

  // Handle file input change
  const handleFileChange = (e: any) => {
    const temp = e.target.files[0];
    if (temp) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        setFile(e.target.result);
      };
      reader.readAsDataURL(temp);
    }
  };

  // Upload file to Pinata
  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    const metadata = JSON.stringify({
      name: file.name,
      keyvalues: {
        exampleKey: 'exampleValue',
      },
    });
    formData.append('pinataMetadata', metadata);

    const options = JSON.stringify({
      cidVersion: 0,
    });
    formData.append('pinataOptions', options);

    try {
      const response = await axios.post(
        'https://api.pinata.cloud/pinning/pinFileToIPFS',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            pinata_api_key: API_KEY,
            pinata_secret_api_key: API_SECRET,
          },
        }
      );

      setIpfsHash(response.data.IpfsHash);
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Failed to upload file to IPFS.');
    } finally {
    }
  };
  return (
    <div className="flex items-center justify-between p-4 rounded-2xl border border-grey-bright/10 bg-grey-dark inner-shadow">
      <div className="relative items-center">
        <div className="relative w-[80px] h-[80px] rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
          <input
            type="file"
            className="absolute opacity-0 w-full h-full"
            onChange={handleFileChange}
          />
          <img src={file} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex justify-center mb-2">
          <button
            className="px-6 py-1 rounded-xl border border-grey-bright font-bold text-grey-bright text-md"
            onClick={handleUpload}
          >
            Upload
          </button>
        </div>
        <input
          type="text"
          readOnly
          placeholder="IPFS Address"
          value={ipfsHash || 'No file uploaded'}
          className="flex-1 ml-5 p-2 rounded-lg bg-dark border border-grey-bright/10 text-grey-bright outline-none"
        />
      </div>
    </div>
  );
}

export default IPFSLogo;
