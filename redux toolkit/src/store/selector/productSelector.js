import { createSelector } from "@reduxjs/toolkit";


export const selectSocialList = createSelector(selectSocialList, (state) => state.data)
export const selectSocialLoading = createSelector(selectSocialList, (state) => state.loading)
export const selectSocialError = createSelector(selectSocialList, (state) => state.error)