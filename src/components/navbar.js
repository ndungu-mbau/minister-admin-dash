import React, { useState } from 'react'
import { Link } from "react-router-dom"

const Wrapper = ({ children }) => (
  <>
    <nav className='navbar navbar-dark navbar-theme-primary px-4 col-12 d-md-none'>
      <a className='navbar-brand mr-lg-5' href='../../index.html'>
        <img
          className='navbar-brand-dark'
          src='../../assets/img/brand/light.svg'
          alt='Volt logo'
        />{' '}
        <img
          className='navbar-brand-light'
          src='../../assets/img/brand/dark.svg'
          alt='Dishii Kenya'
        />
      </a>
      <div className='d-flex align-items-center'>
        <button
          className='navbar-toggler d-md-none collapsed'
          type='button'
          data-toggle='collapse'
          data-target='#sidebarMenu'
          aria-controls='sidebarMenu'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
      </div>
    </nav>
    <div className='container-fluid bg-soft'>
      <div className='row'>
        <div className='col-12'>{children}</div>
      </div>
    </div>
  </>
)

const NavBar = props => {
  return (
    <Wrapper>
      <nav
        id='sidebarMenu'
        className='sidebar d-md-block bg-primary text-white collapse'
        data-simplebar
      >
        <div className='sidebar-inner px-4 pt-3'>
          <div className='user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4'>
            <div className='d-flex align-items-center'>
              <div className='user-avatar lg-avatar mr-4'>
                <img
                  src='../../assets/img/team/profile-picture-3.jpg'
                  className='card-img-top rounded-circle border-white'
                  alt='Bonnie Green'
                />
              </div>
              <div className='d-block'>
                <h2 className='h6'>Hi, Jane</h2>
                <a
                  href='../../pages/examples/sign-in.html'
                  className='btn btn-secondary text-dark btn-xs'
                >
                  <span className='mr-2'>
                    <span className='fas fa-sign-out-alt'></span>
                  </span>
                  Sign Out
                </a>
              </div>
            </div>
            <div className='collapse-close d-md-none'>
              <a
                href='#sidebarMenu'
                className='fas fa-times'
                data-toggle='collapse'
                data-target='#sidebarMenu'
                aria-controls='sidebarMenu'
                aria-expanded='true'
                aria-label='Toggle navigation'
              ></a>
            </div>
          </div>
          <div className='d-flex align-items-center justify-content-center'>
            <div className='d-block'>
              <h2 className='display-4'>{props.title}</h2>
            </div>
          </div>
          <hr className="my-2"></hr>
          <ul className='nav flex-column'>
            {props.links.map(
              ({ title, icon, link, children = undefined, id = undefined }) => {
                if (children) {
                  return (
                    <li className='nav-item'>
                      <span
                        className='nav-link  collapsed  d-flex justify-content-between align-items-center'
                        data-toggle='collapse'
                        data-target={`#submenu-${id}`}
                      >
                        <span>
                          <span className='sidebar-icon'>
                            <span className={`fas fa-${icon}`}></span>
                          </span>
                          {title}
                        </span>
                        <span className='link-arrow'>
                          <span className='fas fa-chevron-right'></span>
                        </span>
                      </span>
                      <div
                        className='multi-level collapse '
                        role='list'
                        id={`submenu-${id}`}
                        aria-expanded='false'
                      >
                        <ul className='flex-column nav'>
                          {children.map(({ link, title, icon }) => {
                            return (
                              <li className='nav-item '>
                                <Link
                                  className='nav-link'
                                  to={link}
                                >
                                  <span className='sidebar-icon'>
                                    <span className={`fas fa-${icon}`}></span>
                                  </span>
                                  <span>{title}</span>
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </li>
                  )
                }
                return (
                  <li className='nav-item'>
                    <Link to={link} className='nav-link'>
                      <span className='sidebar-icon'>
                        <span className={`fas fa-${icon}`}></span>
                      </span>
                      <span>{title}</span>
                    </Link>
                  </li>
                )
              }
            )}
          </ul>
        </div>
      </nav>
    </Wrapper>
  )
}

export default NavBar
