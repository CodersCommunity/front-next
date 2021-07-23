import { Route } from 'vue-router'
import redirects from './redirects'

describe('redirects middleware', () => {
  it('redirects categories', () => {
    const redirect = jest.fn()
    const route: Partial<Route> = {
      fullPath: '/categories',
      path: '/categories',
    }
    // @ts-ignore
    redirects({ route, redirect })
    expect(redirect).toBeCalledWith(301, '/kategorie')
  })

  it('redirects login without query', () => {
    const redirect = jest.fn()
    const route: Partial<Route> = {
      fullPath: '/login',
      path: '/login',
    }
    // @ts-ignore
    redirects({ route, redirect })
    expect(redirect).toBeCalledWith(301, '/logowanie')
  })

  it('redirects login with query', () => {
    const redirect = jest.fn()
    const route: Partial<Route> = {
      query: { to: '' },
      fullPath: '/login?to=',
      path: '/login',
    }
    // @ts-ignore
    redirects({ route, redirect })
    expect(redirect).toBeCalledWith(301, '/logowanie')
  })

  it('redirects last activity', () => {
    const redirect = jest.fn()
    const route: Partial<Route> = {
      fullPath: '/activity',
      path: '/activity',
    }
    // @ts-ignore
    redirects({ route, redirect })
    expect(redirect).toBeCalledWith(301, '/ostatnia-aktywnosc')
  })

  it('redirects questions without query', () => {
    const redirect = jest.fn()
    const route: Partial<Route> = {
      fullPath: '/questions',
      path: '/questions',
    }
    // @ts-ignore
    redirects({ route, redirect })
    expect(redirect).toBeCalledWith(301, '/pytania')
  })

  it('redirects questions with query "sort"', () => {
    const redirect = jest.fn()
    const route: Partial<Route> = {
      query: { sort: 'hot' },
      fullPath: '/questions?sort=hot',
      path: '/questions',
    }
    // @ts-ignore
    redirects({ route, redirect })
    expect(redirect).toBeCalledWith({
      path: '/pytania',
      query: {
        sortowanie: 'gorące',
      },
    })
  })

  it('redirects questions with query "start', () => {
    const redirect = jest.fn()
    const route: Partial<Route> = {
      query: { start: '40' },
      fullPath: '/questions?start=40',
      path: '/questions',
    }
    // @ts-ignore
    redirects({ route, redirect })
    expect(redirect).toBeCalledWith({ path: '/pytania', query: { strona: 3 } })
  })
})
