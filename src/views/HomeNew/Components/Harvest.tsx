import React, { useCallback, useState } from 'react'
import { Button, makeStyles } from '@material-ui/core'
import { ChevronRightIcon } from '@pancakeswap-libs/uikit'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import { TranslateString } from 'utils/translateTextHelpers'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(-45deg,#152E51,#23436E)',
    borderRadius: 10,
  },
  btn: {
    width: 150,
    height: 40,
  },
  icon: {
    fill: '#f6d76a !important'
  }
}))

const Harvest = () => {
  const classes = useStyles()
  const [pendingTx, setPendingTx] = useState(false)
  const farmsWithBalance = useFarmsWithBalance()

  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

  return (
    <div className={classes.root}>
      <Button disabled={balancesWithValue.length <= 0 || pendingTx} onClick={harvestAllFarms} variant="contained" color="primary" className={`farm_card_unlock_btn ${classes.btn}`}>
        {pendingTx
          ? TranslateString(548, 'Collecting EGG')
          : TranslateString(999, `Harvest all (${balancesWithValue.length})`)}
        < ChevronRightIcon className={classes.icon} fontSize="inherit" />
      </Button>
    </div>
  )
}

export default Harvest
