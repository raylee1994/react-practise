let router = [
    {
        path: "/",
        component: "home",
        exact: true,
        authorazation: false
    },
    {
        path: "/ComA",
        component: "comA",
        exact: false,
        authorazation: true
    },
    {
        path: "/ComB",
        component: "comB",
        exact: false,
        authorazation: true
    },
    {
        path: "/Detail/:id",
        component: "Detail",
        exact: false,
        authorazation: true
    },
    {
        path: "/Login",
        component: "Login",
        exact: false,
        authorazation: true
    }
]

export default router