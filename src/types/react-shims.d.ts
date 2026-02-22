// Local shims to satisfy TypeScript checks in environments without node_modules
declare module 'react/jsx-runtime' {
  export function jsx(type: any, props?: any, key?: any): any;
  export function jsxs(type: any, props?: any, key?: any): any;
  export function jsxDEV(type: any, props?: any, key?: any, isStatic?: any, source?: any, self?: any): any;
}

declare module 'react' {
  const React: any;
  export default React;
  export const Fragment: any;
  export const Children: any;
  export type ComponentType<P = any> = any;
  export const useState: any;
  export const useEffect: any;
  export const useContext: any;
  export const useReducer: any;
  export const useCallback: any;
  export const useMemo: any;
  export const useRef: any;
  export const useImperativeHandle: any;
  export const useLayoutEffect: any;
  export const useDebugValue: any;
  export const useDeferredValue: any;
  export const useTransition: any;
  export const useSyncExternalStore: any;
  export const useId: any;
}

declare module 'react-dom' {
  const ReactDOM: any;
  export default ReactDOM;
}
