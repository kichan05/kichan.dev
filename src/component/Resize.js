import {useEffect} from "react";

export const Resize = () => {
  const handleResize = () => {
    const vh = window.innerHeight / 100;
    const vw = window.innerWidth / 100;

    document.documentElement.style.setProperty("--vh", `${vh}px`)
    document.documentElement.style.setProperty("--vw", `${vw}px`)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  return <div></div>
}