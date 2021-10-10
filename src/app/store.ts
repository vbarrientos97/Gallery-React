import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { galleryApi } from 'features/gallery/services/galleryApi';

export const store = configureStore({
    reducer: {
        [galleryApi.reducerPath]: galleryApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(galleryApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
