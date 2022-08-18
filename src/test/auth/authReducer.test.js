import authReducer from "../../auth/authReducer";
import { types } from "../../types/types";

describe('Pruebas a authReducers', ()=>{
    test('Retornar por default', ()=>{
        const state= authReducer({logged: false}, {})

        expect(state).toEqual({logged: false})

    });

    test('Loguiarme con nombre de usuario', ()=>{

        const action={
            type: types.login,
            payload: {name: 'Yudith Leon'}
        }

        const state= authReducer({logged: false}, action)

        expect(state).toEqual({logged: true, name: "Yudith Leon"})

    });

    test('Debo hacer logout, estado false', () =>{
        const action={
            type: types.logout
          
        }

        const state= authReducer({logged: true}, action)

        expect(state).not.toEqual({logged: false})
        expect(state).toEqual({logged: false})
    })

})