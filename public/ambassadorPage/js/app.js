window.state = {
    isUnlocked: false,
    tokenBalance: '',
    pendingDivs: '',
    totalEarnedTokens: '',
    cliffTime: '',
    stakingTime: '',
    depositedTokens: '',
    lastClaimedTime: '',
    depositAmount: '',
    withdrawAmount: '',
    coinbase: '',
    stakers: '',
    contractBalance: '',
    stakingFeeRate: '',
    unstakingFeeRate: '',
    highFeeRate: '',
    rewardRate: ''
}

function setState(obj) {
    const newState = {...window.state, ...obj}
    window.state = newState
    render(newState)
}

async function refreshBalance () {
    let coinbase = await window.getCoinbase()
    setState({coinbase})
    try {
        let _bal = token.balanceOf(coinbase)
        let _pDivs = staking.getPendingDivs(coinbase)
        let _cliffTime = staking.cliffTime()
        let _tEarned = staking.totalEarnedTokens(coinbase)
        let _stakingTime = staking.stakingTime(coinbase)
        let _dTokens = staking.depositedTokens(coinbase)
        let _lClaimTime = staking.lastClaimedTime(coinbase)
        let _stakers = staking.getNumberOfHolders()

        let _contractBalance = token.balanceOf(window.config.staking_address)

        let _stakingFeeRate = staking.stakingFeeRate()
        let _unstakingFeeRate = staking.unstakingFeeRate()
        let _highFeeRate = staking.highFeeRate()

        let _rewardRate = staking.getRewardRateForHolder(coinbase)

        let [tokenBalance, pendingDivs, cliffTime, totalEarnedTokens, stakingTime, 
        depositedTokens, lastClaimedTime, stakers, contractBalance,
        stakingFeeRate, highFeeRate, unstakingFeeRate, rewardRate ] = await Promise.all([_bal, _pDivs, _cliffTime, _tEarned, _stakingTime, _dTokens, _lClaimTime, _stakers, _contractBalance,
                                            
                                                            _stakingFeeRate, _highFeeRate, _unstakingFeeRate, _rewardRate])


        // let totalStaked = (new BigNumber(contractBalance)).minus(stakingAndDaoAmount).toString(10)
        $("#_stakers_value").text(stakers)
        setState({
            tokenBalance, 
            pendingDivs, 
            cliffTime, 
            totalEarnedTokens,
            stakingTime, 
            depositedTokens,
            lastClaimedTime,
            stakers,
            contractBalance,
            stakingFeeRate,
            unstakingFeeRate,
            highFeeRate,
            rewardRate
        })
    } catch (e) {
        console.error(e)
    }
}

let $connectWalletBtn = $("#l-connect-wallet-btn"),
$depositInput = $("#l-deposit-input"),
$withdrawInput = $("#l-withdraw-input"),
$setMaxDepositBtn = $("#l-set-max-deposit-btn"),
$setMaxWithdrawBtn = $("#l-set-max-withdraw-btn"),
$stakeBtn = $("#l-stake-btn"),
$unstakeBtn = $("#l-unstake-btn"),
$claimBtn = $("#l-claim-btn"),
$exitBtn = $("#l-exit-btn"),
$tokenBalance = $("#l-token-balance"),
$tokenStaked = $("#l-token-staked"),
$pendingDivs = $("#l-pending-divs"),
$tvl = $("#l-tvl"),
$rewardRate = $("#l-reward-rate"),
$stakingFee = $("#l-staking-fee"),
$unstakingFee = $("#l-unstaking-fee")



function render(state) {
    if (!state.isUnlocked) return;

    let {token_decimals: decimals} = window.config

    let {tokenBalance, rewardRate, stakingFeeRate, unstakingFeeRate, highFeeRate,
        pendingDivs, totalEarnedTokens, depositedTokens, cliffTime, stakingTime, coinbase, stakers, contractBalance} = window.state

        tokenBalance = new BigNumber(tokenBalance).div(10**decimals).toString(10)
        tokenBalance = getFormattedNumber(tokenBalance, 6)

        pendingDivs = new BigNumber(pendingDivs).div(10**decimals).toString(10)
        pendingDivs = getFormattedNumber(pendingDivs, 6)

        totalEarnedTokens = new BigNumber(totalEarnedTokens).div(10**decimals).toString(10)
        totalEarnedTokens = getFormattedNumber(totalEarnedTokens, 6)

        depositedTokens = new BigNumber(depositedTokens).div(10**decimals).toString(10)
        depositedTokens = getFormattedNumber(depositedTokens, 6)

        contractBalance = new BigNumber(contractBalance).div(10**decimals).toString(10)
        contractBalance = getFormattedNumber(contractBalance, 6)

        stakers = new BigNumber(stakers).toString(10)
        stakers = getFormattedNumber(stakers, 0)

        rewardRate = getFormattedNumber(rewardRate/100, 2)

        cliffTime = cliffTime*1e3
        stakingTime = stakingTime*1e3

        let normalFeePeriod = true
        if (!isNaN(cliffTime) && !isNaN(stakingTime) && Number(depositedTokens)>0) {
            if (Date.now() - stakingTime <= cliffTime) 
                normalFeePeriod = false
        }

        let _unstakingFeeRate = unstakingFeeRate;
        if (!normalFeePeriod) {
            _unstakingFeeRate = highFeeRate
            $(".show-during-high-fee-period").show()
        } else {
            $(".show-during-high-fee-period").hide()
        }

        _unstakingFeeRate = getFormattedNumber(_unstakingFeeRate/100, 2)
        stakingFeeRate = getFormattedNumber(stakingFeeRate/100, 2)

        $tokenBalance.html(tokenBalance)
        $tokenStaked.html(depositedTokens)
        $pendingDivs.html(pendingDivs)
        $tvl.html(contractBalance)
        $rewardRate.html(rewardRate)
        $stakingFee.html(stakingFeeRate)
        $unstakingFee.html(_unstakingFeeRate)
} 



window.addEventListener("load", () => {
    $connectWalletBtn.click(handleConnection)
    $setMaxDepositBtn.click(ifConnected(handleSetMaxDeposit))
    $setMaxWithdrawBtn.click(ifConnected(handleSetMaxWithdraw))
    $stakeBtn.click(ifConnected(handleStake))
    $unstakeBtn.click(ifConnected(handleUnstake))
    $claimBtn.click(ifConnected(handleClaim))
    $exitBtn.click(ifConnected(staking.exit))
})

function ifConnected(fn) {
    return function(...args) {
        if (window.state.isUnlocked) {
            fn(...args)
        }
    }
}



function handleSetMaxDeposit (e) {
    e.preventDefault()
    let depositAmount = new BigNumber(window.state.tokenBalance).div(10**window.config.token_decimals).toFixed(18)
    setState({depositAmount})
    $depositInput.val(depositAmount)
}

function handleSetMaxWithdraw (e) {
    e.preventDefault()
    let withdrawAmount = new BigNumber(window.state.depositedTokens).div(10**window.config.token_decimals).toFixed(18)
    setState({withdrawAmount})
    $withdrawInput.val(withdrawAmount)
}


function handleStake(e) {
    e.preventDefault()
    let amount = $depositInput.val()
    amount = new BigNumber(amount).times(10**window.config.token_decimals).toFixed(0)
    staking.stakeTokens(amount)
}

function handleUnstake(e) {
    e.preventDefault()
    let amount = $withdrawInput.val()
    amount = new BigNumber(amount).times(10**window.config.token_decimals).toFixed(0)
    staking.unstake(amount)
}

function handleClaim (e) {
    e.preventDefault()
    staking.claim()
}



function getFormattedNumber(n, decimals=2) {

    if (isNaN(Number(n))) return '...';

    let formatter = new Intl.NumberFormat()
    let [first, second] = Number(n).toFixed(decimals).split('.')
    first = formatter.format(first)
    if (decimals === 0) return first;
    return first + '.' + second
}

async function handleConnection () {
    console.log('yoooo')
    if (window.state.isUnlocked) return;
    try {
      let isUnlocked = await window.connectWallet()
      setState({isUnlocked, coinbase: await window.web3.eth.getCoinbase()})
      refreshBalance()
      setInterval(refreshBalance, 3000)
      $connectWalletBtn.html($connectWalletBtn.attr("data-connected-text"))
    } catch (e) {
      window.alertify.error(String(e))
    }
  }

  let int = setInterval(()=>{
    let res = $("#_connect_state_achieved").text();
    if(res === "true"){
        handleConnection();
        $("#_connect_state_achieved").text("falseConnected")
    }
  },1000)
