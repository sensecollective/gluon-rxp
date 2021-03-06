import { fork } from 'redux-saga/effects'
import * as AppSaga from './AppSaga'
import * as AttachmentSaga from './AttachmentSaga'
import * as ModalMessageSaga from './ModalMessageSaga'
import * as NavigationSaga from './NavigationSaga'
import * as UportSaga from './UportSaga'
import * as Web3Saga from './Web3Saga'

export default function* root() {
  yield fork(Web3Saga.watchLoadFeed)
  yield fork(AppSaga.watchHandleError)
  yield fork(AppSaga.watchResetToInitialState)
  yield fork(AppSaga.watchStoreReady)
  yield fork(AppSaga.watchSyncCodePushDeployment)
  yield fork(AppSaga.watchUrlChanges)
  yield fork(AttachmentSaga.watchGetFromIpfs)
  yield fork(AttachmentSaga.watchSaveAttachment)
  yield fork(AttachmentSaga.watchStartDownload)
  yield fork(ModalMessageSaga.watchCloseModalMessage)
  yield fork(NavigationSaga.watchNavigate)
  yield fork(UportSaga.watchStartLogin)
  yield fork(Web3Saga.watchAddToken)
  yield fork(Web3Saga.watchCreateNewToken)
  yield fork(Web3Saga.watchGetTokenInfo)
  yield fork(Web3Saga.watchRefreshBalances)
  yield fork(Web3Saga.watchStartSavingTransaction)
}
