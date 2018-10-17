
export function getMenu() {
    {/**
                     * workresume
                     * workblog
                     * tourism
                     * homepage
                     * paymentdetails
                     * happytime
                     */
                }
    return {
        type: "MENU_LIST",
        data: [{"id":"0",
        "icon":"user",
        "title":"首页",
        "link":"/homepage"
    },{
            "id":"1",
            "icon":"user",
            "title":"工作",
            "childrens":[
                {
                    "id":"1-1",
                    "icon":"user",
                    "title":"博客",
                    "link":"/workblog"
                },{
                    "id":"1-2",
                    "icon":"user",
                    "title":"简历",
                    "link":"/workresume"
                }
            ]
        },{
            "id":"2",
            "icon":"user",
            "title":"家庭",
            "childrens":[
                {
                    "id":"2-1",
                    "icon":"user",
                    "title":"收支明细",
                    "link":"/paymentdetails"
                },{
                    "id":"2-2",
                    "icon":"user",
                    "title":"家庭时光",
                    "link":"/happytime"
                }
            ]
        },{
            "id":"3",
            "icon":"user",
            "title":"旅游",
            "link":"/tourism"
        }]
    };
}
