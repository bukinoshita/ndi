import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classnames from 'classnames'

import { Colors, space, Weight } from 'ui/theme'

if ('document' in global) {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)

  window.addEventListener('resize', () => {
    // We execute the same script as before
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  })
}

export const Sidebar = () => {
  const router = useRouter()

  const isActiveRoute = (route: string) => route === router.pathname
  const getRouteClass = (route: string) =>
    classnames('sidebar-nav-item__link', {
      'sidebar-nav-item__link--active': isActiveRoute(route),
    })

  return (
    <aside className="sidebar">
      <Link href="/" passHref>
        <a className="sidebar__logo">ndi_</a>
      </Link>

      <ul className="sidebar-nav">
        <li className="sidebar-nav-item">
          <Link href="/" passHref>
            <a className={getRouteClass('/')}>Pretos</a>
          </Link>
        </li>

        <li className="sidebar-nav-item">
          <Link href="/mulheres" passHref>
            <a className={getRouteClass('/mulheres')}>Mulheres</a>
          </Link>
        </li>

        <li className="sidebar-nav-item">
          <Link href="/asiaticos" passHref>
            <a className={getRouteClass('/asiaticos')}>Asiáticos</a>
          </Link>
        </li>

        <li className="sidebar-nav-item">
          <Link href="/" passHref>
            <a className={getRouteClass('/lgbtq')}>LGBTQ+</a>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        .sidebar {
          padding: ${space.spacing(14)} ${space.spacing(10)};
          border-right: 1px solid ${Colors.Border};
          min-height: calc(var(--vh, 1vh) * 100);
        }

        .sidebar__logo {
          color: ${Colors.GrayDarker};
          font-size: 27px;
          font-weight: ${Weight.ExtraBold};
          text-decoration: none;
        }

        .sidebar-nav {
          margin-top: ${space.spacing(14)};
        }

        .sidebar-nav-item {
          margin-top: ${space.spacing(10)};
          list-style: none;
        }

        .sidebar-nav-item__link {
          text-decoration: none;
          color: ${Colors.Gray};
          font-size: 15px;
          font-weight: ${Weight.Medium};
        }

        .sidebar-nav-item__link--active {
          color: ${Colors.GrayDarker};
        }
      `}</style>
    </aside>
  )
}
