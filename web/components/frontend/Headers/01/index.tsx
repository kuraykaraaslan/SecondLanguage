import React from "react";

import { CircleFlag } from "react-circle-flags";

const Hero01 = () => {

    return (
        <div className="relative hero lg:bg-base-200 rounded-box h-fit overflow-hidden group">
            <video muted loop autoPlay className="absolute object-fit hidden lg:block opacity-45 blur-sm group-hover:opacity-30 duration-500">
                <source src="/assets/video/hero_01_background.webm" type="video/webm" />
            </video>

            <div className="hero-content flex-col lg:flex-row-reverse lg:my-16">
                <div className="text-center lg:text-left lg:ml-8">
                    <h1 className="text-5xl font-bold drop-shadow-2xl
                    ">Learn your <span className="text-primary">second language</span> with ease</h1>
                    <p className="py-6 text-lg drop-shadow-2xl">A versatile and powerful platform designed to facilitate language learning in an engaging and effective manner.</p>
                    <div className="flex justify-center lg:justify-start">
                        <span className="text-2xl font-bold drop-shadow-2xl
                        ">Available in:</span>
                        <div className="flex -mt-8">
                        <CircleFlag countryCode="uk" height="35" width="35" className="ml-2 border-2 border-white rounded-full" />
                        <CircleFlag countryCode="de" height="35" width="35" className="ml-2 border-2 border-white rounded-full" />
                        <CircleFlag countryCode="tr" height="35" width="35" className="ml-2 border-2 border-white rounded-full" />
                        <div className="flex items-center justify-center ml-2 border-2 border-white rounded-full h-9 w-9 mt-8 bg-base-200">
                            <span className="text-l">+20</span>
                        </div>
                        </div>

                    </div>

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-2 border-base-200 lg:border-0">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default Hero01;