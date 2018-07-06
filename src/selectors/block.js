// import { createSelector } from 'reselect';
// import get from 'lodash/get';
// import isEmpty from 'lodash/isEmpty';
// import values from 'lodash/values';

/**
 * db selectors
 */

export const blocksByIdSelector = state => state.db.block.byId;
export const blockErrorSelector = state => state.db.block.isError;
export const blockLoadingSelector = state => state.db.block.isLoading;

/**
 * ui selectors
 */

// export const blocksSelector = createSelector(
// 	[
// 		cardsByIdSelector,
// 		boardByUserIdSelector,
// 		boardViewSelector,
// 		entityUrlSelector
// 	],
// 	(cardsById, boardByUserId, boardView, { entityId }) => {
// 		if (!entityId) return [];
// 		const userBoard = get(boardByUserId, `${entityId}`, null);

// 		if (!isEmpty(userBoard)) {
// 			const isArchived = boardView === ARCHIVED;

// 			const cards = [];
// 			values(userBoard.boardCardIds).forEach(boardCardId => {
// 				const card = get(cardsById, boardCardId, {});
// 				if (isEmpty(card)) return;
// 				if (isArchived === card.archived) cards.push(card);
// 			});
// 			return cards;
// 		}

// 		return [];
// 	}
// );
