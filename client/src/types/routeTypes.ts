export interface IRoute {
    path: string,
    component: (arg:any) => JSX.Element
}  