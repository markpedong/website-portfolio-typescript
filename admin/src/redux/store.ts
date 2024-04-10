import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import booleanReducer from './features/booleanSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, createTransform } from 'redux-persist';
import { compress, decompress } from 'lz-string';

type RootType = {
	boolean: ReturnType<typeof booleanReducer>;
};

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
	transforms: [
		createTransform(
			i => compress(JSON.stringify(i)),
			o => JSON.parse(decompress(o))
		)
	]
};

const reducer = combineReducers({
	boolean: booleanReducer
});

//@ts-ignore
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware => {
		return getDefaultMiddleware({
			serializableCheck: false
		});
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootType> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
