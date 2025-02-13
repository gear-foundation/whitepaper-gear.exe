import { useEffect, useState } from "react"

const isBrowser = typeof window !== "undefined"

/**
 * Hook that tracks the state of a CSS media query.
 * defaultState needed to configure server side rendering and avoid hydration errors
 * on client side components used without default value
 */
export function useMedia(query: string, defaultState?: boolean) {
  const [state, setState] = useState(() => {
    if (isBrowser && defaultState === undefined) {
      return window.matchMedia(query).matches
    }
    return defaultState ?? false
  })
  const listener = (event: MediaQueryListEvent): void => setState(event.matches)

  useEffect(() => {
    let mqList: MediaQueryList | null = null

    if (isBrowser) {
      setState(window.matchMedia(query).matches)
      mqList = window.matchMedia(query)

      try {
        mqList.addEventListener("change", listener) // Chrome & Firefox
      } catch (e1) {
        try {
          mqList.addListener(listener) // Safari
        } catch (e2) {
          console.error(e2)
        }
      }
    }

    return () => {
      if (mqList) {
        try {
          mqList.removeEventListener("change", listener) // Chrome & Firefox
        } catch (e1) {
          try {
            mqList.removeListener(listener) // Safari
          } catch (e2) {
            console.log(e2)
          }
        }
      }
    }
  }, [query])

  return state
}

export const useIsMobile = (defaultState?: boolean) =>
  useMedia("(max-width: 996px)", defaultState)
