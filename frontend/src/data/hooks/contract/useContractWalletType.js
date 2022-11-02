import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useLenderBorrowerContract } from "../../context/lenderBorrowerContractContext.js"

export const useContractWalletType = () => {
  const { address } = useAccount();
  const [contractWalletType, setContractWalletType] = useState(null);
  const { lenderBorrowerContract } = useLenderBorrowerContract();

  useEffect(() => {

    const getAccountType = async () => {
      const accountType = await lenderBorrowerContract.getAccountType(address);

      setContractWalletType(accountType);
      console.log(accountType, 'accType');
    };

    getAccountType().catch(console.error);
  }, []);

  return { contractWalletType };
};
