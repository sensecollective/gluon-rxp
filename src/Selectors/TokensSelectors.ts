import { createSelector } from 'reselect'
import { CombinedState } from '../Reducers'
import * as Enums from '../Enums'
import * as _ from 'lodash'
import Utils from '../Utils'
import * as FeedSelectors from './FeedSelectors'

export const getList = (state: CombinedState) => state.tokens.list
export const getListForFeed = (state: CombinedState) => _.filter(
  state.tokens.list,
  (item: Token) => item.type !== Enums.TokenType.ETH,
)
export const getNew = (state: CombinedState) => state.tokens.new
export const getTokenByAddress = (state: CombinedState, address: string): Token => {
  return _.find(state.tokens.list, {address: address})
}

export const getListForDownload = createSelector(
  [getListForFeed, FeedSelectors.getSelectedToken],
  (list, selectedToken) => {
    if (!selectedToken) {
      return list
    } else {
      return _.filter(list, (item: Token) => item.address === selectedToken)
    }
  },
)
