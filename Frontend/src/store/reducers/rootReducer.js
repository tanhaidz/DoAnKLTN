import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import appReducer from "./appReducer";
import userReducer from "./userReducer";
import adminReducer from "./adminReducer";
import productReducer from './productReducer';
import orderReducer from './orderReducer';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import cartReducer from './cartReducer';
import customerReducer from './customerReducer';
import notificationReducer from './notificationReducer';

// const persistCommonConfig = {
//     storage: storage,
//     stateReconciler: autoMergeLevel2,
// };


// const userPersistConfig = {
//     ...persistCommonConfig,
//     key: 'user',
//     whitelist: ['isLoggedIn', 'userInfo']
// };
// const appPersistConfig = {
//     ...persistCommonConfig,
//     key: 'app',
//     whitelist: ['language']
// };
const rootReducer = combineReducers({

    app: appReducer,
    user: userReducer,
    product: productReducer,
    order: orderReducer,
    cart: cartReducer,
    customer: customerReducer,
    admin: adminReducer,
    notification: notificationReducer,
});

export default rootReducer;