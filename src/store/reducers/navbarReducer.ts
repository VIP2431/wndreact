export enum ENavbarActionTypes {
    RENDER_NAVBAR = 'RENDER_NAVBAR',
}

interface IRenderNavbarAction {
    type: ENavbarActionTypes.RENDER_NAVBAR;
    payload: number;
}

export type  INavbarAction = IRenderNavbarAction

export interface INavbarState {
    navbar: number;
}

const defaultState: INavbarState = {
    navbar:  0,
}

export const navbarReducer = (state = defaultState, action: INavbarAction): INavbarState => {

    switch (action.type) {
        case ENavbarActionTypes.RENDER_NAVBAR:
            return {...state, navbar: state.navbar + action.payload}
        default:
            return state;
    }
}
