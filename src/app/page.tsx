"use client";

import Image from "next/image";
import React from "react";

export default function Home() {
  function handleMenuBar() {
    const menu = document.querySelector(".fame__menu-list");
    menu?.classList.toggle("active");
  }

  return (
    <div className="fame__container">
      <div className="fame__header">
        <p>
          🚀 <span>FRESH BEGINNINGS SALE:</span> Extra 25% OFF, Limited Spots -
          start your journey today!
        </p>
      </div>
      <div className="fame__body">
        <div className="fame__body-header-container">
          <Image
            src={"/Images/logo.png"}
            alt="logo"
            width={100}
            height={100}
            className="w-24 h-12"
          />
          <div className="fame__menu">
            <span onClick={handleMenuBar}>
              <Image
                src={"/Images/bar.svg"}
                alt="Menu Bar"
                width={25}
                height={25}
                className="w-6 h-6"
              />
            </span>
            <div className="fame__menu-list">
              <ul>
                <li>About Us</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="fame__body-content">
          <div className="fame__body-content-text">
            <p>Want to Turn Social Media Into a Profitable Career?</p>
            <p>Discover your way to success with Fametonic:</p>
            <ul className="fame__body-content-text-list">
              <li>
                <span>✨</span> Start growing your influence right away—no
                waiting required!
              </li>
              <li>
                <span>✨</span> Create viral TikToks and Reels step by step with
                easy-to-follow lessons
              </li>
              <li>
                <span>✨</span> Use a Personal AI Worker to boost your content
              </li>
              <li>
                <span>✨</span> Learn from expert-led courses designed for
                aspiring influencers
              </li>
            </ul>
            <div className="fame__body-content-text-footer-container">
              <div className="fame__body-content-text-button-container">
                <button className="fame__body-content-text-button">
                  Get Started
                  <Image
                    src={"/Images/arrow.svg"}
                    alt="arrow"
                    width={7}
                    height={6}
                  />
                </button>
                <p>1-minute quiz for personalized Insights</p>
              </div>
              <div className="fame__body-content-text-footer">
                <p>
                  By clicking &quot;Get Started&quot;, you agree with Terms and
                  Conditions, Privacy Policy, Subscription Terms
                </p>
                <p>Fametonic 2025 ©All Rights Reserved.</p>
              </div>
            </div>
          </div>
          <div className="fame__body-content-img">
            <Image
              src={"/Images/banner_img.png"}
              alt="hero"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
