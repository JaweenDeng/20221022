/*
 * @Author: djw
 * @Description: 获取窗口宽高hook
 */
import { useState, useEffect } from 'react'
export const useSize = () => {
  const html = document.documentElement
  const [size, setSize] = useState({width:html.clientWidth, height:html.clientHeight})
  useEffect(() => {
    const onSize = () => setSize({width:html.clientWidth, height:html.clientHeight})
    window.addEventListener('resize', onSize)
    return () => {
      window.removeEventListener('resize', onSize)
    }
  }, [html])
  return size
}