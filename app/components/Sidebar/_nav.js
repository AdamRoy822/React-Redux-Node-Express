export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      title: true,
      name: 'MENU',
      wrapper: {
        element: '',
        attributes: {}
      },
      class: ''
    },
    {
      name: 'Users',
      url: '/users',
      icon: 'icon-people',
      children: [
        {
          name: 'Signed Users',
          url: '/users/signup',
          icon: 'icon-minus'
        },
        {
          name: 'Info Session Users',
          url: '/users/info-session',
          icon: 'icon-minus'
        },
        {
          name: 'Referral Users',
          url: '/users/referral',
          icon: 'icon-minus'
        },
        {
          name: 'GetLanded Users',
          url: '/users/get-landed',
          icon: 'icon-minus'
        }
      ]
    },
    {
      name: 'Brokers',
      url: '/brokers',
      icon: 'icon-user-follow',
      children: [
        {
          name: 'All Brokers',
          url: '/brokers/all',
          icon: 'icon-minus',
          badge: {
            variant: 'secondary',
            text: '4.7'
          }
        },
        {
          name: 'Add New Broker',
          url: '/brokers/add-new',
          icon: 'icon-minus'
        }
      ]
    },
    {
      name: 'Reports',
      url: '/report',
      icon: 'icon-pie-chart',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      divider: true
    },
    {
      title: true,
      name: 'Extras'
    },
    {
      name: 'Support',
      url: '/support',
      icon: 'icon-support',
      children: [
        {
          name: 'Technical',
          url: '/support/technical',
          icon: 'icon-envelope-letter'
        },
        {
          name: 'Get Landed',
          url: '/support/landed',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: 'View Website',
      url: 'https://landed.com/',
      icon: 'icon-globe',
      class: 'mt-auto',
      variant: 'success'
    },
    {
      name: 'Tech Support',
      url: 'https://www.skmukhiya.com.np',
      icon: 'icon-phone',
      variant: 'secondary'
    }
  ]
}
