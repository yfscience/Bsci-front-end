import BigNumber from 'bignumber.js'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Button, Modal } from '@pancakeswap-libs/uikit'
import ModalActions from 'components/ModalActions'
import TokenInput from 'components/TokenInput'
import useI18n from 'hooks/useI18n'
import { getFullDisplayBalance } from 'utils/formatBalance'
import { Button as Button2, makeStyles } from '@material-ui/core'

interface UnStackModalProps {
  max: number
  onConfirm: (amount: string) => void
  onDismiss?: () => void
  tokenName?: string
  unStakeInput?: any
}

const useStyles = makeStyles({
  button: {
    padding: '25px 40px',
    color: '#ffffffc7 !important'
  }
})

const UnStackModal: React.FC<UnStackModalProps> = ({ unStakeInput, onConfirm, onDismiss, max, tokenName = 'YFSI' }) => {
  const [val, setVal] = useState('')
  const [pendingTx, setPendingTx] = useState(false)
  const TranslateString = useI18n()
  const classes = useStyles()

  const fullBalance = useMemo(() => {
    return (max).toString();
  }, [max])

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setVal(e.currentTarget.value)
    },
    [setVal],
  )

  useEffect(() => {
    unStakeInput(val)
  }, [unStakeInput, val])

  const handleSelectMax = useCallback(() => {
    setVal(fullBalance)
  }, [fullBalance, setVal])

  return (
    <Modal title={`Withdraw ${tokenName}`} onDismiss={onDismiss}>
      <TokenInput
        onSelectMax={handleSelectMax}
        onChange={handleChange}
        value={val}
        max={fullBalance}
        symbol={tokenName}
      />
      <ModalActions>
        <Button2
          style={{ padding: '25px 40px' }}
          variant="contained"
          color="primary"
          className={`farm_card_unlock_btn ${classes.button}`}
          onClick={onDismiss}>
          {TranslateString(462, 'Cancel')}
        </Button2>
        <Button2
          style={{ padding: '25px 40px' }}
          variant="contained"
          color="primary"
          className="farm_card_unlock_btn"
          disabled={pendingTx}
          onClick={async () => {
            setPendingTx(true)
            await onConfirm(val)
            setPendingTx(false)
            onDismiss()
          }}
        >
          {pendingTx ? TranslateString(488, 'Pending Confirmation') : TranslateString(464, 'Confirm')}
        </Button2>
      </ModalActions>
    </Modal>
  )
}

export default UnStackModal
