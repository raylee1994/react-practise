let router = [
    {
        path: "/",
        component: "components/home",
        exatct: true,
        authorazation: true
    },
    {
        path: "/ComA",
        component: "components/ComA",
        authorazation: true
    },
    {
        path: "/ComB",
        component: "components/ComB",
        authorazation: true
    },
    {
        path: "/Detail/:id",
        component: "components/Detail",
        authorazation: true
    },
    {
        path: "/Login",
        component: "components/Login",
        authorazation: true
    }
]

export default router