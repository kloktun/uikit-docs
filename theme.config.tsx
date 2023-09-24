import { useRouter } from 'next/router'
import UIKitLogo from './components/icons/uikit-logo'

export default {
    logo: <div className='flex flex-row items-center'><UIKitLogo /></div>,

    useNextSeoProps: () => {

      const { asPath } = useRouter();

      if (asPath !== '/') {
        return {
          titleTemplate: '%s — KLOKTUN UI Kit'
        }
      }
      return {
        title: "KLOKTUN UI Kit"
      }
    },

    project: {
      link: 'https://github.com/kloktun/uikit'
    },
    
    darkMode: false,
    primaryHue: {
      dark: 269,
      light: 265
    },

    footer: {
      text: (
        <span>
          {new Date().getFullYear()} &copy; KLOKTUN UI Kit
        </span>
      )
    },

    feedback: {
      useLink: () => "https://kloktun.me"
    },

    editLink: {

      component: () => <a href="https://kloktun.me">KLOKTUN</a>

    },

}