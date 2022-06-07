import { ReduxAction } from '../../types/reducers'

export enum DATA_ACTIONS {
    SET_CONTENTS = 'dataActions/setContents',
    SHOWMODAL = 'modal'
}

export const setDataContents: ReduxAction<string[]> = (contents) => {
    return {
        type: DATA_ACTIONS.SET_CONTENTS,
        payload: contents
    }
}

export const showModal:ReduxAction<boolean> = (visible)=>{
    return {
        type: DATA_ACTIONS.SHOWMODAL,
        payload: visible
    }
}
