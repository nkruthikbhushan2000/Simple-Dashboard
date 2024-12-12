export const DefaultDashBoardData = {
    DataPod: [
        {
          title: "Customers",
          number: 3781,
          isProfit: true,
          percent: "+11.01%",
        },
        {
          title: "Revenue",
          number: "$1,023,456",
          isProfit: false,
          percent: "-12.34%",
        },
        {
          title: "Products",
          number: 1234,
          isProfit: true,
          percent: "+8.56%",
        },
        {
          title: "Orders",
          number: 5678,
          isProfit: false,
          percent: "-5.67%",
        },
      ],
      BarChart: [
        { name: 'Jan', Projections: 20, Actuals: 18 },
        { name: 'Feb', Projections: 25, Actuals: 22 },
        { name: 'Mar', Projections: 22, Actuals: 19 },
        { name: 'Apr', Projections: 28, Actuals: 26 },
        { name: 'May', Projections: 18, Actuals: 15 },
        { name: 'Jun', Projections: 30, Actuals: 28 },
      ],
      LineChart: [
        { name: 'Jan', CurrentWeek: 10, PreviousWeek: 8 },
        { name: 'Feb', CurrentWeek: 15, PreviousWeek: 12 },
        { name: 'Mar', CurrentWeek: 12, PreviousWeek: 14 },
        { name: 'Apr', CurrentWeek: 18, PreviousWeek: 16 },
        { name: 'May', CurrentWeek: 14, PreviousWeek: 19 },
        { name: 'Jun', CurrentWeek: 22, PreviousWeek: 21 },
      ],
      PieChart: [
        { name: 'Direct', value: 300.56 },
        { name: 'Affiliate', value: 135.18 },
        { name: 'Sponsored', value: 154.02 },
        { name: 'E-mail', value: 48.96 },
      ],
      RevenueChart: [
        { name: 'New York', coordinates: [-74.006, 40.7128], revenue: 72000 },
        { name: 'San Francisco', coordinates: [-122.4194, 37.7749], revenue: 39000 },
        { name: 'Sydney', coordinates: [151.2093, -33.8688], revenue: 25000 },
        { name: 'Singapore', coordinates: [103.8198, 1.3521], revenue: 61000 },
      ]
}

export const NotificationSideBarData = {
    Notifacations:[
        {
            title: "You have a bug that needs attention. Please check.",
            timeStamp: "86400000"
        },
        {
            title: "New feature added to the app. Check it out.",
            timeStamp: "1727527365"
        },
        {
            title: "Meeting scheduled for tomorrow at 10 AM.",
            timeStamp: "1727527365"
        },
        {
            title: "Your report is ready for review.",
            timeStamp: "1727395756"
        },
        // {
        //     title: "New user registered on the app. Welcome!",
        //     timeStamp: "1727395712"
        // }
    ],
    Activities:[
        {
            title: "You added a new project.",
            timeStamp: "1727395907"
        },
        {
            title: "You updated the design of the app.",
            timeStamp: "1727395854"
        },
        {
            title: "You commented on a user's post.",
            timeStamp: "1727395800"
        },
        // {
        //     title: "You shared a document with a colleague.",
        //     timeStamp: "1727395756"
        // },
        // {
        //     title: "You created a new folder.",
        //     timeStamp: "1727395712"
        // }
    ],
    Contacts:[
        {
            title: "Jane Doe",
        },
        {
            title: "Krubhuu",
        },
        {
            title: "Jon sam",
        },
        // {
        //     title: "Michael Johnson",
        // },
        // {
        //     title: "Emily Thompson",
        // }
    ]
}

export const TopSellingProducts = [
    {
      "name": "ASOS Ridley High Waist",
      "price": "$79.8",
      "quantity": 85,
      "amount": "$6783"
    },
    {
      "name": "Nike Air Max 270",
      "price": "$150.5",
      "quantity": 60,
      "amount": "$9030"
    },
    {
      "name": "Zara Cotton Shirt",
      "price": "$45.3",
      "quantity": 120,
      "amount": "$5436"
    },
    {
      "name": "Levi's 501 Original Jeans",
      "price": "$89.9",
      "quantity": 75,
      "amount": "$6742.5"
    },
    {
      "name": "Adidas Ultraboost Sneakers",
      "price": "$180.0",
      "quantity": 50,
      "amount": "$9000"
    }
  ]

  export const ColumnsTopProductSelling = [
    {
      title: 'Product Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
  ];

  export const OrderList = [
    {
        key: "1",
        orderID: "#CM9801",
        user: "Natali Craig",
        project: "Landing Page",
        address: "Meadow Lane Oakland",
        date: "Just now",
        status: "In Progress",
      },
      {
        key: "2",
        orderID: "#CM9802",
        user: "Kate Morrison",
        project: "CRM Admin Pages",
        address: "Larry San Francisco",
        date: "A minute ago",
        status: "Complete",
      },
      {
        key: "3",
        orderID: "#CM9803",
        user: "Drew Cono",
        project: "Client Project",
        address: "Bagwell Avenue Ocala",
        date: "1 hour ago",
        status: "Pending",
      },
      {
        key: "4",
        orderID: "#CM9804",
        user: "Orlando Diggs",
        project: "Admin Dashboard",
        address: "Washburn Baton Rouge",
        date: "Yesterday",
        status: "Late",
      },
      {
        key: "5",
        orderID: "#CM9805",
        user: "Andi Lane",
        project: "App Landing Page",
        address: "Nest Lane Olivette",
        date: "Feb 2, 2023",
        status: "Rejected",
      },
    {
      key: '6',
      orderID: '#CM9806',
      user: 'Jenna Hudson',
      project: 'E-commerce Platform',
      address: 'Bridgeway Boulevard Denver',
      date: '2 days ago',
      status: 'In Progress',
    },
    {
      key: '7',
      orderID: '#CM9807',
      user: 'Mark Ronson',
      project: 'Portfolio Website',
      address: 'Pleasant Street Boston',
      date: 'Just now',
      status: 'Complete',
    },
    {
      key: '8',
      orderID: '#CM9808',
      user: 'Karen Carter',
      project: 'Marketing Website',
      address: 'King Avenue Sacramento',
      date: '3 hours ago',
      status: 'Pending',
    },
    {
      key: '9',
      orderID: '#CM9809',
      user: 'Paul Baker',
      project: 'Mobile App Design',
      address: 'Cypress Lane Austin',
      date: 'Yesterday',
      status: 'Late',
    },
    {
      key: '10',
      orderID: '#CM9810',
      user: 'Emma Stone',
      project: 'Blog Platform',
      address: 'Monroe Street Detroit',
      date: 'A week ago',
      status: 'Rejected',
    },
    {
      key: '11',
      orderID: '#CM9811',
      user: 'David Banner',
      project: 'SAAS Dashboard',
      address: 'Lakeview Road Chicago',
      date: 'Just now',
      status: 'In Progress',
    },
    {
      key: '12',
      orderID: '#CM9812',
      user: 'Olivia Hall',
      project: 'Social Media App',
      address: 'Springfield Road Seattle',
      date: '2 minutes ago',
      status: 'Complete',
    },
    {
      key: '13',
      orderID: '#CM9813',
      user: 'Riley Cooper',
      project: 'Corporate Website',
      address: 'Grove Street Phoenix',
      date: '4 hours ago',
      status: 'Pending',
    },
    {
      key: '14',
      orderID: '#CM9814',
      user: 'Sophia Brown',
      project: 'E-learning Platform',
      address: 'Hawthorn Street Miami',
      date: 'Yesterday',
      status: 'Late',
    },
    {
      key: '15',
      orderID: '#CM9815',
      user: 'Logan Turner',
      project: 'Fitness App',
      address: 'Park Avenue New York',
      date: 'Feb 10, 2023',
      status: 'Rejected',
    },
    {
      key: '16',
      orderID: '#CM9816',
      user: 'Ethan Myers',
      project: 'Landing Page',
      address: 'Elm Street Dallas',
      date: 'Just now',
      status: 'In Progress',
    },
    {
      key: '17',
      orderID: '#CM9817',
      user: 'Lily Fisher',
      project: 'News Portal',
      address: 'Magnolia Drive Houston',
      date: 'A minute ago',
      status: 'Complete',
    },
    {
      key: '18',
      orderID: '#CM9818',
      user: 'James Wong',
      project: 'Client Portfolio',
      address: 'Ocean Drive Los Angeles',
      date: '5 hours ago',
      status: 'Pending',
    },
    {
      key: '19',
      orderID: '#CM9819',
      user: 'Alice Ross',
      project: 'E-commerce Redesign',
      address: 'Walnut Street San Diego',
      date: 'Yesterday',
      status: 'Late',
    },
    {
      key: '20',
      orderID: '#CM9820',
      user: 'Chris Evans',
      project: 'Event Website',
      address: 'Cedar Lane Orlando',
      date: 'Last week',
      status: 'Rejected',
    },
    {
      key: '21',
      orderID: '#CM9821',
      user: 'Isabella Parker',
      project: 'Online Marketplace',
      address: 'Oakwood Avenue Charlotte',
      date: 'Just now',
      status: 'In Progress',
    },
    {
      key: '22',
      orderID: '#CM9822',
      user: 'Michael Smith',
      project: 'Charity Website',
      address: 'Maple Street Portland',
      date: '2 minutes ago',
      status: 'Complete',
    },
    {
      key: '23',
      orderID: '#CM9823',
      user: 'Harper Green',
      project: 'Photography Website',
      address: 'Linden Avenue Denver',
      date: '3 hours ago',
      status: 'Pending',
    },
    {
      key: '24',
      orderID: '#CM9824',
      user: 'Benjamin Lee',
      project: 'Web App Redesign',
      address: 'Birch Drive San Jose',
      date: 'Yesterday',
      status: 'Late',
    },
    {
      key: '25',
      orderID: '#CM9825',
      user: 'Chloe White',
      project: 'E-learning Portal',
      address: 'Pine Lane Las Vegas',
      date: 'Feb 15, 2023',
      status: 'Rejected',
    },
  ];
  
  
  