export interface ComponentInterface<TData, TSpecialData = any> {
    data: TData;
    specialData?: TSpecialData;
}
