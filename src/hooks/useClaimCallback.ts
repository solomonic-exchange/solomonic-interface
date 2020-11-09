// import { MaxUint256 } from '@ethersproject/constants'
// import { TransactionResponse } from '@ethersproject/providers'
// import { Token} from '@uniswap/sdk'
// import { useCallback } from 'react'
// import ReactGA from 'react-ga'
// import { ROUTER_ADDRESS } from '../constants'
// import { getTradeVersion, useV1TradeExchangeAddress } from '../data/V1'
// import { Field } from '../state/swap/actions'
// import { useTransactionAdder} from '../state/transactions/hooks' //useHasPendingApproval
// import { computeSlippageAdjustedAmounts } from '../utils/prices'
// import { calculateGasMargin } from '../utils'
import { useFaucetContract} from './useContract' //, useTokenContract
// import { useActiveWeb3React } from './index'
// import { Version } from './useToggledVersion'
// import { stripUnit } from 'polished'

// export enum ClaimedState {
//   UNKNOWN,
//   NOT_CLAIMED,
//   PENDING,
//   CLAIMED
// }

// const amountToClaim = 1000000000;

// returns a variable indicating the state of the approval and a function which approves if necessary or early returns
export function useClaimCallback(){

  // const deployedAddress = "0x77738b9d7B5d882EcEa57526EB4C648Cb8c042eA";
  // // const amountToClaim = 1000000000;
  // const abi = 
  // [{"constant":true,"inputs":[],"name":"faucetStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"faucetName","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenInstance","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"drip5000Token","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"turnFaucetOff","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"turnFaucetOn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_tokenInstance","type":"address"},{"name":"_faucetName","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"receiver","type":"address"}],"name":"TokensSent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"status","type":"bool"}],"name":"FaucetOn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"status","type":"bool"}],"name":"FaucetOff","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}];
  // const faucet = web3.eth.contract(abi).at(deployedAddress);
  
  // return faucet.drip5000Token();

 return useFaucetContract()?.callStatic || null; // web3.eth.contract(abi).at(deployedAddress);





  // const SOLERC20Address = "0xd171507b03fcf7df41fa945469be4399fb3c9131";
  // const faucet = useFaucetContract() || null; // web3.eth.contract(abi).at(deployedAddress);
  // const token = useTokenContract(faucet?.tokenInstance || Token ||  null) ; // : Token ?? undefined;//faucet instanceof TokenAmount ? amountToClaim.token : undefined
  // const currentStatus =  faucet?.faucetStatus || null;
  // var claimed: any = false;


  // const { chainId } = useActiveWeb3React();

  // const addTransaction = useTransactionAdder();
  // const isFaucetPending = useIsFaucetPending(pendingRemovalHash ?? undefined)

  // claimed  = useCallback(() => {
  //   // if (!currentStatus) return

  //   // setConfirmingRemoval(true)
  //   faucet?.drip5000Token
  //     .then((response: TransactionResponse) => {
  //       ReactGA.event({
  //         category: 'Claim',
  //         action: 'V2',
  //         label: token?.symbol
  //       })
  //     // dispatch(addTransaction({ hash, from: account, chainId, approval, summary }))

  //       // addTransaction(response, { //${chainId && token.equals(WETH[chainId]) ? 'WETH' : token.symbol}
  //       //   summary: `Remove 111/ETH V1 liquidity`
  //       // })
  //       // setPendingRemovalHash(response.hash)
  //     })
  //     .catch((error: Error) => {
  //       console.error(error)
  //       // setConfirmingRemoval(false)
  //     })
  // }, [SOLERC20Address, currentStatus, token, chainId, claimed]);


  //     return claimed;
//   spender?: string
// ): [ClaimedState, () => Promise<void>] {
  // const { account } = useActiveWeb3React();
  // const tokenContract = useTokenContract(SOLERC20Address)


//   // const currentAllowance = useHasPendingApproval(token?.address, account || spender);

//   // check the current approval status
//   const ClaimState: ClaimedState = useMemo(() => {
//     if (!currentStatus || !account) return ClaimedState.UNKNOWN
//     if (currentStatus === true) return ClaimedState.CLAIMED
//     // we might not have enough data to know whether or not we need to approve
//     if (!currentStatus) return ClaimedState.UNKNOWN

//     // amountToApprove will be defined if currentAllowance is
//     return currentStatus.lessThan(currentStatus)
//       ? ClaimedState.UNKNOWN
//         ? ClaimedState.PENDING
//         : ClaimedState.NOT_CLAIMED
//       : ClaimedState.CLAIMED
//   }, [account])


    // let useExact = false;
    // const estimatedGas = faucet.estimateGas.drip5000Token(account, MaxUint256).catch(() => {
    //   // general fallback for tokens who restrict approval amounts
    //   useExact = true
    //   return faucet.estimateGas.drip5000Token(spender)
    // })


  // const addTransaction = useTransactionAdder()
  //      addTransaction("", {
  //         summary: 'Claim  ' + token.currency.symbol,
  //         approval: { tokenAddress: token.address, spender: spender}  || undefined
  //       })



        



//   const approve = useCallback(async (): Promise<void> => {
//     if (faucet?.fausetStatus() !== ClaimedState.NOT_CLAIMED) {
//       console.error('approve was called unnecessarily')
//       return
//     }
//     if (!token) {
//       console.error('no token')
//       return
//     }

//     if (!tokenContract) {
//       console.error('tokenContract is null')
//       return
//     }

//     if (!currentStatus) {
//       console.error('missing amount to approve')
//       return
//     }

//     if (!spender) {
//       console.error('no spender')
//       return
//     }

//     let useExact = false
//     const estimatedGas = await faucet.estimateGas.drip5000Token(account, MaxUint256).catch(() => {
//       // general fallback for tokens who restrict approval amounts
//       useExact = true
//       return faucet.estimateGas.drip5000Token(spender)
//     })
//     // faucet.drip5000Token();

//     return tokenContract
//       .approve(account, useExact ? faucet.drip5000Token.raw.toString() : MaxUint256, {
//         gasLimit: calculateGasMargin(estimatedGas)
//       })
//       .then((response: TransactionResponse) => {
//         addTransaction(response, {
//           summary: 'Claim  ' + token.currency.symbol,
//           approval: { tokenAddress: token.address, spender: spender}  || undefined
//         })
//       })
//       .catch((error: Error) => {
//         console.debug('Failed to approve token', error)
//         throw error
//       })
//   }, [account, spender, addTransaction])

//   return [ClaimState, approve]
}

// // wraps useClaimCallback in the context of a swap
// export function useClaimCallbackFromTrade(trade?: Trade, allowedSlippage = 0) {
//   const amountToApprove = useMemo(
//     () => (trade ? computeSlippageAdjustedAmounts(trade, allowedSlippage)[Field.INPUT] : undefined),
//     [trade, allowedSlippage]
//   )
//   const tradeIsV1 = getTradeVersion(trade) === Version.v1
//   const v1ExchangeAddress = useV1TradeExchangeAddress(trade)
//   return useClaimCallback(amountToApprove)//, tradeIsV1 ? v1ExchangeAddress : ROUTER_ADDRESS)
// }
