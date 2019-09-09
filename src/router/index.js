let router = [
    {
        path: "/",
        component: "components/home",
        exact: true,
        authorazation: false
    },
    {
        path: "/ComA",
        component: "components/ComA",
        exact: false,
        authorazation: true
    },
    {
        path: "/ComB",
        component: "components/ComB",
        exact: false,
        authorazation: true
    },
    {
        path: "/Detail/:id",
        component: "components/Detail",
        exact: false,
        authorazation: true
    },
    {
        path: "/Login",
        component: "components/Login",
        exact: false,
        authorazation: true
    }
]

export default router