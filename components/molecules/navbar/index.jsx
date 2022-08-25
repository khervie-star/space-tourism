import React, { useState } from "react";
import Link from "next/link";
export default function Navbar() {
  const [show, setShow] = useState(null);
  const [profile, setProfile] = useState(false);
  const [product, setProduct] = useState(false);
  const [deliverables, setDeliverables] = useState(false);
  return (
    <>
      <div className="bg-transparent w-full">
        {/* Code block starts */}
        <nav className="bg-transparent xl:block hidden py-8">
          <div className="mx-auto py-2 xl:py-0">
            <div className="flex items-center justify-between ">
              <div className="inset-y-0 left-0 flex items-center xl:hidden">
                <div className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-100 focus:outline-none transition duration-150 ease-in-out">
                  <div className="visible xl:hidden">
                    <ul className="p-2 border-r bg-transparent absolute rounded left-0 right-0 shadow mt-8 md:mt-8 hidden">
                      <li className="flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-grid"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <rect x={4} y={4} width={6} height={6} rx={1} />
                            <rect x={14} y={4} width={6} height={6} rx={1} />
                            <rect x={4} y={14} width={6} height={6} rx={1} />
                            <rect x={14} y={14} width={6} height={6} rx={1} />
                          </svg>
                          <span className="ml-2 font-bold">Dashboard</span>
                        </div>
                      </li>
                      <li className="flex xl:hidden flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-puzzle"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                          </svg>
                          <span className="ml-2 font-bold">Products</span>
                        </div>
                      </li>
                      <li className="flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-compass"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="8 16 10 10 16 8 14 14 8 16" />
                          <circle cx={12} cy={12} r={9} />
                        </svg>
                        <span className="ml-2 font-bold">Performance</span>
                      </li>
                      <li className="border-b border-gray-300 flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-code"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="7 8 3 12 7 16" />
                          <polyline points="17 8 21 12 17 16" />
                          <line x1={14} y1={4} x2={10} y2={20} />
                        </svg>
                        <span className="ml-2 font-bold">Deliverables</span>
                      </li>
                      <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                        <div className="flex items-center">
                          <div className="w-12 cursor-pointer flex text-sm border-2 border-transparent rounded focus:outline-none focus:border-white transition duration-150 ease-in-out">
                            <img
                              className="rounded h-10 w-10 object-cover"
                              src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png"
                              alt="logo"
                            />
                          </div>
                          <p className="text-sm ml-2 cursor-pointer">
                            Jane Doe
                          </p>
                          <div className="sm:ml-2 text-white relative">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </div>
                        </div>
                      </li>
                      <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-user"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={12} cy={7} r={4} />
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                          </svg>
                          <span className="ml-2">Profile</span>
                        </div>
                      </li>
                    </ul>
                    <svg
                      onClick="MenuHandler(this,true)"
                      aria-haspopup="true"
                      aria-label="Main Menu"
                      xmlns="http://www.w3.org/2000/svg"
                      className="show-m-menu icon icon-tabler icon-tabler-menu"
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={4} y1={8} x2={20} y2={8} />
                      <line x1={4} y1={16} x2={20} y2={16} />
                    </svg>
                  </div>
                  <div
                    className="hidden close-m-menu text-gray-700"
                    onClick="MenuHandler(this,false)"
                  >
                    <svg
                      aria-label="Close"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={18} y1={6} x2={6} y2={18} />
                      <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
                <div className="flex items-center ml-16">
                  <img src="/static/assets/shared/logo.svg" />
                </div>
              </div>
              <div className="flex w-[50%] h-[1px] bg-white/25 items-center sm:items-stretch justify-end sm:justify-start mr-[-5%] z-10   ">
                {" "}
              </div>
              <div className="flex bg-white/[0.04] backdrop-blur-md  ">
                <div className="hidden xl:flex md:mx-6 xl:mx-24">
                  <Link href="/">
                    <span className="flex px-5 items-center py-6 leading-5 text-white uppercase font-normal text-base  border-b-0 border-b-white/[.5041]  hover:border-b-[3px] hover:border-b-white/[.5041]  transition   hover:transition-all hover:duration-[300ms] ease-in-out">
                      <span className="mr-2 font-bold">00</span>
                      Home
                    </span>
                  </Link>
                  <Link href="/destination">
                    <span className="flex px-5 items-center py-6 leading-5 text-white uppercase font-normal text-base  border-b-0 border-b-white/[.5041]  hover:border-b-[3px] hover:border-b-white/[.5041]  transition   hover:transition-all hover:duration-[300ms] ease-in-out">
                      <span className="mr-2 font-bold">01</span>
                      Destination
                    </span>
                  </Link>
                  <Link href="/crew">
                    <span className="flex px-5 items-center py-6 leading-5 text-white uppercase font-normal text-base  border-b-0 border-b-white/[.5041]  hover:border-b-[3px] hover:border-b-white/[.5041]  transition   hover:transition-all hover:duration-[300ms] ease-in-out">
                      <span className="mr-2 font-bold">02</span>
                      Crew
                    </span>
                  </Link>
                  <Link href="/technology">
                    <span className="flex px-5 items-center py-6 leading-5 text-white uppercase font-normal text-base  border-b-0 border-b-white/[.5041]  hover:border-b-[3px] hover:border-b-white/[.5041]  transition   hover:transition-all hover:duration-[300ms] ease-in-out">
                      <span className="mr-2 font-bold">03</span>
                      Technology
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav>
          <div className="p-6 w-full flex xl:hidden justify-between items-center bg-transparent fixed top-0 z-40">
            <div className="w-24">
              <img src="/static/assets/shared/logo.svg" />
            </div>
            <div className="flex items-center">
              <div
                id="menu"
                className="text-gray-800"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  ""
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="21"
                  >
                    <g fill="#D0D6F9" fillRule="evenodd">
                      <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
                    </g>
                  </svg>
                )}
              </div>
            </div>
          </div>
          {/*Mobile responsive sidebar*/}
          <div
            className={
              show
                ? "w-full xl:hidden h-full absolute z-40 right-0 transform  translate-x-0 transition-all duration-[400ms]"
                : " w-full xl:hidden h-full absolute z-40 right-0 transform -translate-x-full transition-all duration-[400ms]"
            }
          >
            <div
              className="bg-gray-800 opacity-10 w-full h-full"
              onClick={() => setShow(!show)}
            />
            <div className="w-64 z-40 fixed overflow-y-auto z-40 top-0 bg-white/[0.04] backdrop-blur-md  h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
              <div className="px-6 h-full">
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="mt-6 flex w-full items-center justify-between">
                      <div className="flex items-center justify-between w-full">
                        <div>
                          <div
                            id="menu"
                            className="text-gray-800"
                            onClick={() => setShow(false)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="21"
                            >
                              <g fill="#D0D6F9" fillRule="evenodd">
                                <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
                                <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="f-m-m">
                      <div className="cursor-pointer">
                        <li className="text-gray-800 pt-10">
                          <div className="flex items-center">
                            <Link href="/">
                              <span className="flex px-5 items-center leading-5 text-white uppercase font-normal text-base  border-b-0 border-b-white/[.5041]  hover:border-b-[3px] hover:border-b-white/[.5041]  transition   hover:transition-all hover:duration-[300ms] ease-in-out">
                                <span className="mr-2 font-bold">00</span>
                                Home
                              </span>
                            </Link>
                          </div>
                        </li>
                      </div>
                      <div className="cursor-pointer">
                        <li className="text-gray-800 pt-8">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Link href="/destination">
                                <span className="flex px-5 items-center leading-5 text-white uppercase font-normal text-base  border-b-0 border-b-white/[.5041]  hover:border-b-[3px] hover:border-b-white/[.5041]  transition   hover:transition-all hover:duration-[300ms] ease-in-out">
                                  <span className="mr-2 font-bold">01</span>
                                  Destination
                                </span>
                              </Link>
                            </div>
                          </div>
                        </li>
                      </div>
                      <div className="cursor-pointer">
                        <li className="text-gray-800 pt-8">
                          <div className="flex items-center">
                            <Link href="/crew">
                              <span className="flex px-5 items-center leading-5 text-white uppercase font-normal text-base  border-b-0 border-b-white/[.5041]  hover:border-b-[3px] hover:border-b-white/[.5041]  transition   hover:transition-all hover:duration-[300ms] ease-in-out">
                                <span className="mr-2 font-bold">02</span>
                                Crew
                              </span>
                            </Link>
                          </div>
                        </li>
                      </div>
                      <li className="text-gray-800 pt-8 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Link href="/technology">
                              <span className="flex px-5 items-center leading-5 text-white uppercase font-normal text-base  border-b-0 border-b-white/[.5041]  hover:border-b-[3px] hover:border-b-white/[.5041]  transition   hover:transition-all hover:duration-[300ms] ease-in-out">
                                <span className="mr-2 font-bold">03</span>
                                Technology
                              </span>
                            </Link>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Code block ends */}
      </div>
    </>
  );
}
