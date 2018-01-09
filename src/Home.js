import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import groupBy from "lodash.groupby";

import Jungle from "./Jungle";
import { GitHubIcon } from "./Icon";
import octomonkey from "./octomonkey.svg";
import allLists from "./lists.json";

const Home = () => (
  <Fragment>
    <Jungle className="bg-white text-purple-darker">
      <div className="max-w-xl mx-auto pb-6 pt-15">
        <div className="px-4 max-w-lg xl:max-w-full flex flex-wrap flex-row-reverse mx-auto flex items-center mb-8 sm:mb-15">
          <div className="w-full lg:w-1/3">
            <img
              src={octomonkey}
              draggable="false"
              className="select-none block mx-auto mb-8 lg:mb-0 lg:max-w-full xl:w-full lg:pl-4"
              alt="Octomonkey welcomes you!"
            />
          </div>

          <div className="w-full lg:w-2/3">
            <h2
              className="text-2xl sm:text-5xl leading-tight tracking-tight mb-6 text-center lg:text-left mx-auto lg:mx-0"
              style={{ maxWidth: 520 }}>
              Navigate through the <br /> information jungle
            </h2>

            <h3
              className="text-lg sm:text-3xl leading-normal tracking-tight text-purple-darkest font-normal text-center lg:text-left mx-auto lg:mx-0"
              style={{ maxWidth: 480 }}>
              List.community is an easy way to <br /> browse curated lists on GitHub.
            </h3>
          </div>
        </div>

        {Object.entries(groupBy(allLists, "category")).map(([category, lists]) => (
          <Fragment key={category}>
            <h2 className="py-6 text-xl px-4 text-center xl:text-left uppercase tracking-normal">
              {category}
            </h2>

            <ul className="list-reset clearfix pb-6">
              {lists.map(list => (
                <li
                  key={list.slug}
                  className="w-3/5 md:w-1/2 lg:w-1/3 md:float-left mx-auto"
                  style={{ minWidth: 320 }}>
                  <Link
                    to={list.slug}
                    className={
                      "link-reset hover:custom-outline focus:custom-outline hover:bg-blue-lightest " +
                      "py-8 px-6 m-4 md:h-64 block text-center rounded-lg overflow-hidden shadow-md leading-normal"
                    }>
                    <img
                      src={`${list.logo}?size=128`}
                      width="64"
                      height="64"
                      className="mb-4 inline-block select-none"
                      draggable="false"
                      alt={`${list.label} logo`}
                    />
                    <strong className="mb-1 block">{list.label}</strong>
                    <span>{list.shortDescription}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Fragment>
        ))}
      </div>
    </Jungle>

    <header className="fixed z-20 pin-t pin-x select-none antialiased text-white bg-white shadow hidden sm:block">
      <div className="max-w-xl mx-auto flex items-center h-16">
        <Link to="/" className="link-reset p-4">
          <h1 className="text-2xl font-bold tracking-tight text-purple-darker">List.community</h1>
        </Link>

        <div className="flex-1" />

        <a
          href={"https://github.com/listcommunity/support#how-do-i-add-a-list"}
          className="link-reset px-4 py-3 mr-4 bg-purple-dark rounded items-center text-lg flex">
          <span className="mr-3">Submit a list</span>
          <GitHubIcon width="16" height="16" />
        </a>
      </div>
    </header>

    <Helmet>
      <link rel="icon" type="image/png" href="/favicon.png" />
    </Helmet>
  </Fragment>
);

export default Home;