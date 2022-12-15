"use strict";
exports.id = 512;
exports.ids = [512];
exports.modules = {

/***/ 5870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
//import {useState, useEffect,useRef} from 'react'


//import FeedbackForm from './components/FeedbackForm'
const FeedbackForm = (props)=>{
    const [feedback, setFeedback] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const MailText = ()=>{
        window.open(`mailto:shantanubombatkar2@gmail.com?subject=Feedback&body=${feedback}` //to send mail
        );
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex justify-center items-center rounded-lg shadow-lg p-2 bg-blog md:w-[80vh] mx-auto animate-bounce mt-20 md:mt-5 hover:animate-none",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col justify-center items-center text-white font-semibold",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Feedback is the most important part of any website."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "If you have any query, suggestion or feedback, Please feel free to contact us."
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                type: "text",
                name: "",
                id: "",
                value: feedback,
                onChange: (e)=>setFeedback(e.target.value),
                className: "w-60 pl-1 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blog/75"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "bg-white text-blog rounded-lg p-1 px-2 ml-3 font-semibold",
                onClick: MailText,
                children: "Submit"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(FeedbackForm));


/***/ }),

/***/ 7127:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8993);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_3__]);
_index__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
//import {useState, useEffect,useRef} from 'react'



//import Footer from './components/Footer'

const Footer = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_3__/* .FeedbackForm */ .q5, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                "aria-label": "Site Footer",
                className: "bg-blog/5 rounded-t-3xl",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "pt-8 mt-8 border-t border-gray-100",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grid grid-cols-1 gap-8 lg:grid-cols-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "text-xs text-left text-gray-500",
                                    children: "\xa9 2022. Shodkk.com. All rights reserved."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                    "aria-label": "Footer Navigation - Support",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "flex flex-wrap justify-start gap-4 text-xs lg:justify-end",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    href: "terms-and-conditions",
                                                    className: "text-gray-500 transition hover:opacity-75",
                                                    children: "Terms & Conditions"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                    href: "/privacy-policy",
                                                    className: "text-gray-500 transition hover:opacity-75",
                                                    children: "Privacy Policy"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "/privacy-policy#Cookies",
                                                    className: "text-gray-500 transition hover:opacity-75",
                                                    children: "Cookies"
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().memo(Footer));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
//import {useState, useEffect,useRef} from 'react'




const Navbar = (props)=>{
    const [login, setLogin] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (localStorage.getItem("token")) {
            setLogin(true);
        }
    }, [
        login
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
            "aria-label": "Site Header",
            className: "bg-white",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mx-auto flex h-16 items-center gap-8 px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        className: "block text-blog",
                        href: "/",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "sr-only",
                                children: "Home"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-2xl font-bold text-blog hover:text-blog/75 ",
                                children: "Shodkk"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-1 items-center justify-end md:justify-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                "aria-label": "Site Nav",
                                className: "hidden md:block",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: "flex items-center gap-6 text-sm",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                className: "font-semibold text-gray-700 transition hover:text-blog/75",
                                                href: "/",
                                                children: "Projects"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                className: "font-semibold text-gray-700 transition hover:text-blog/75",
                                                href: "/tools",
                                                children: "Tools"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                className: "font-semibold text-gray-700 transition hover:text-blog/75",
                                                href: "/dashboard",
                                                children: "Dashboard"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                className: "font-semibold text-gray-700 transition hover:text-blog/75",
                                                href: "https://shodkk.com",
                                                children: "Blog"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                className: "font-semibold text-gray-700 transition hover:text-blog/75",
                                                href: "https://shantanubombatkar.shodkk.com",
                                                children: "About"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "sm:flex sm:gap-4",
                                        children: [
                                            !login ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                className: "block rounded-md bg-blog px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blog/75",
                                                href: "/login",
                                                children: "Login"
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "block rounded-md bg-blog px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blog/75",
                                                onClick: ()=>{
                                                    window.localStorage.removeItem("token");
                                                    router.push("/");
                                                    setLogin(false);
                                                },
                                                children: "Logout"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                className: "hidden rounded-md bg-red-100 px-5 py-2.5 text-sm font-medium text-blog transition hover:text-blog/75 sm:block",
                                                href: "/",
                                                children: "Register"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        className: "block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-blog/75 md:hidden",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "sr-only",
                                                children: "Toggle menu"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "h-5 w-5",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M4 6h16M4 12h16M4 18h16"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().memo(Navbar));


/***/ }),

/***/ 3096:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6555);
/* harmony import */ var _redux_actions_creators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(995);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_3__]);
uuid__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
//import {useState, useEffect,useRef} from 'react'
//import Pagination from './components/Pagination'





const Pagination = ()=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    const { currentPage , postsPerPage , totalPages , paginate  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.paginationReducer);
    const paginateArray = new Array(10).fill(0);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex justify-center items-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "mx-2 bg-blog text-white font-bold py-2 px-4 rounded",
                    onClick: ()=>dispatch((0,_redux_actions_creators__WEBPACK_IMPORTED_MODULE_4__/* .PaginationDec */ .O6)()),
                    children: "Prev Page"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        paginateArray.map((_, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: `mx-2 font-bold py-2 px-4 rounded ${currentPage === index + 1 ? "text-white bg-blog " : "text-blog"}`,
                                onClick: ()=>dispatch((0,_redux_actions_creators__WEBPACK_IMPORTED_MODULE_4__/* .PaginationParticularPage */ .W3)(index + 1)),
                                children: index + 1
                            }, (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)())),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "mx-2 bg-blog text-white font-bold py-2 px-4 rounded",
                            onClick: ()=>dispatch((0,_redux_actions_creators__WEBPACK_IMPORTED_MODULE_4__/* .PaginationInc */ .Fd)()),
                            children: "Next Page"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            className: "mx-2 bg-blog text-white font-bold py-2 px-4 rounded",
                            children: [
                                "CurrentPage: ",
                                currentPage
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(Pagination));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8334:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9362);
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3096);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Pagination__WEBPACK_IMPORTED_MODULE_4__]);
_Pagination__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
//import {useState, useEffect,useRef} from 'react'





//import ShowSavedData from './components/ShowSavedData'
const ShowSavedData = (props)=>{
    const [data, setData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [errorMessage, setErrorMessage] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const { currentPage , paginate , postsPerPage , totalPages  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.paginationReducer);
    const getData = async ()=>{
        setLoading(true);
        try {
            const res = await _api_axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"].get */ .Z.get("/leads" + `?page=${currentPage}&limit=${postsPerPage}`);
            setLoading(false);
            setErrorMessage(null);
            setData(res.data.data);
        } catch (error) {
            setErrorMessage("Error uploading file");
            //   setErrorMessage(error);
            console.log(error, "this is error");
            setLoading(false);
        }
    };
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        getData();
    }, [
        currentPage
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container mx-auto p-3",
                children: [
                    loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: "Loading..."
                    }),
                    errorMessage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: errorMessage
                    }),
                    data && data?.map(({ name , email , phone , linkedin , _id  })=>{
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: name
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-row justify-between",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: email
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: phone
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: linkedin
                                })
                            ]
                        }, _id);
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Pagination__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(ShowSavedData));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8993:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$_": () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "q5": () => (/* reexport safe */ _FeedbackForm__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "wp": () => (/* reexport safe */ _Navbar__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "zt": () => (/* reexport safe */ _ShowSavedData__WEBPACK_IMPORTED_MODULE_3__.Z)
/* harmony export */ });
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7127);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(418);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2787);
/* harmony import */ var _ShowSavedData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8334);
/* harmony import */ var _FeedbackForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5870);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Footer__WEBPACK_IMPORTED_MODULE_0__, _ShowSavedData__WEBPACK_IMPORTED_MODULE_3__]);
([_Footer__WEBPACK_IMPORTED_MODULE_0__, _ShowSavedData__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// import PrivateRoute from "./PrivateRoute";



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fd": () => (/* binding */ PaginationInc),
/* harmony export */   "O6": () => (/* binding */ PaginationDec),
/* harmony export */   "W3": () => (/* binding */ PaginationParticularPage)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2109);

// export const PaginationFunc = (payload) => {
//   return {
//     type: PAGINATION,
//     payload,
//   };
// };
const PaginationInc = ()=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .PAGINATION_INC */ .q5
    };
};
const PaginationDec = ()=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .PAGINATION_DEC */ .qN
    };
};
const PaginationParticularPage = (payload)=>{
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_0__/* .PAGINATION_PARTICULAR_PAGE */ .yY,
        payload
    };
};


/***/ }),

/***/ 2109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_C": () => (/* binding */ PAGINATION_RESET),
/* harmony export */   "q5": () => (/* binding */ PAGINATION_INC),
/* harmony export */   "qN": () => (/* binding */ PAGINATION_DEC),
/* harmony export */   "yY": () => (/* binding */ PAGINATION_PARTICULAR_PAGE)
/* harmony export */ });
const PAGINATION_INC = "PAGINATION_INC";
const PAGINATION_DEC = "PAGINATION_DEC";
const PAGINATION_PARTICULAR_PAGE = "PAGINATION_PARTICULAR_PAGE";
const PAGINATION_RESET = "PAGINATION_RESET";


/***/ })

};
;