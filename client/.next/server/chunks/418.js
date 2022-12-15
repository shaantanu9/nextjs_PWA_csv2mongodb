"use strict";
exports.id = 418;
exports.ids = [418];
exports.modules = {

/***/ 9362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const BACKEND_URL = "http://localhost:8080" || 0;
const instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: BACKEND_URL
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);


/***/ }),

/***/ 418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Login)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./api/axios.js
var axios = __webpack_require__(9362);
;// CONCATENATED MODULE: ./utils/localstorage.js
// get LocalStorage
const getLocalStorage = (key = "")=>{
    if (false) {}
};
// Set LocalStorage
const setLocalStorage = (key, value)=>{
    if (false) {}
};
// Remove LocalStorage
const removeLocalStorage = (key)=>{
    if (false) {}
};

;// CONCATENATED MODULE: ./components/Login.jsx
//import {useState, useEffect,useRef} from 'react'





const Login = (props)=>{
    const [email, setEmail] = external_react_default().useState("");
    const [password, setPassword] = external_react_default().useState("");
    const [isLogin, setIsLogin] = external_react_default().useState(false);
    const router = (0,router_.useRouter)();
    const [loading, setLoading] = external_react_default().useState(false);
    const [error, setError] = external_react_default().useState(null);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        console.log("email", email);
        console.log("password", password);
        try {
            const { data  } = await axios/* default.post */.Z.post("/users/login", {
                email,
                password
            });
            if (data?.token) {
                // setLocalStorage("token", data.token);
                if (window) {
                    window.localStorage.setItem("token", data.token);
                    router.push("/dashboard");
                }
                setIsLogin(true);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setError("Invalid credentials");
            setLoading(false);
        }
    };
    external_react_default().useEffect(()=>{
        const token = getLocalStorage("token");
        if (token) router.push("/dashboard");
    }, [
        isLogin
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            loading && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Loading..."
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "relative flex flex-wrap lg:h-screen lg:items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            alt: "Welcome",
                            src: "https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
                            className: "absolute inset-0 h-full w-full object-cover"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mx-auto max-w-lg text-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "text-2xl font-bold sm:text-3xl",
                                        children: "Get started today!"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mt-4 text-gray-500",
                                        children: "Lead Generation Made Easy. Get More Leads, More Calls, More Sales."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                onSubmit: handleSubmit,
                                className: "mx-auto mt-8 mb-0 max-w-md space-y-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                htmlFor: "email",
                                                className: "sr-only",
                                                children: "Email"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "email",
                                                        className: "w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm",
                                                        placeholder: "Enter email",
                                                        value: email,
                                                        onChange: (e)=>setEmail(e.target.value)
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "absolute inset-y-0 right-4 inline-flex items-center",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "h-5 w-5 text-gray-400",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: "2",
                                                                d: "M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                htmlFor: "password",
                                                className: "sr-only",
                                                children: "Password"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "password",
                                                        className: "w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm",
                                                        placeholder: "Enter password",
                                                        value: password,
                                                        onChange: (e)=>setPassword(e.target.value)
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "absolute inset-y-0 right-4 inline-flex items-center",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "h-5 w-5 text-gray-400",
                                                            fill: "none",
                                                            viewBox: "0 0 24 24",
                                                            stroke: "currentColor",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: "2",
                                                                    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: "2",
                                                                    d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "text-sm text-gray-500",
                                                children: [
                                                    "No account?",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        className: "underline",
                                                        children: "Sign up"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                type: "submit",
                                                className: "ml-3 inline-block rounded-lg bg-blog px-5 py-3 text-sm font-medium text-white",
                                                children: "Sign in"
                                            })
                                        ]
                                    }),
                                    loading && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Loading..."
                                    }),
                                    error && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-red-500",
                                        children: error
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Login = (/*#__PURE__*/external_react_default().memo(Login));


/***/ })

};
;