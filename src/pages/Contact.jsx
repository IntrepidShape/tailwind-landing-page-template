import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Header from "../partials/Header";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

function Contact() {
  const { width, height } = useWindowSize();
  const [thankYou, setThankYou] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_4am7y39",
        "template_x56hi57",
        formData,
        "JuXk5oDTDLMxslrL7",
        {
          name: formData.name,
          email: formData.email,
          budget: formData.budget,
          message: formData.message,
        }
      )
      .then(
        (result) => {
          setThankYou(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  if (thankYou) {
    return (
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Site header */}
        <Header />

        {/* Confetti */}
        <Confetti
          width={width}
          height={height}
          numberOfPieces={3000}
          tweenDuration={10000}
          recycle={false}
        />

        {/*  Page content */}
        <main className="flex-grow">
          <section className="bg-gradient-to-b from-gray-100 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                {/* Page header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                  <h1 className="h1">
                    Thank you for reaching out!
                    We'll be with you shortly. 
                  </h1>
                </div>

            </div>
            </div>
          </section>
        </main>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Site header */}
        <Header />

        {/*  Page content */}
        <main className="flex-grow">
          <section className="bg-gradient-to-b from-gray-100 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                {/* Page header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                  <h1 className="h1">
                    We're here to help you through the process.
                  </h1>
                </div>

                {/* Form */}
                <div className="max-w-sm mx-auto">
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label
                          className="block text-gray-800 text-sm font-medium mb-1"
                          htmlFor="name"
                        >
                          Name <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          className="form-input w-full text-gray-800"
                          placeholder="Enter your name"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label
                          className="block text-gray-800 text-sm font-medium mb-1"
                          htmlFor="email"
                        >
                          Email <span className="text-red-600">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="form-input w-full text-gray-800"
                          placeholder="Enter your email address"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label
                          className="block text-gray-800 text-sm font-medium mb-1"
                          htmlFor="budget"
                        >
                          Budget
                          <span className="text-red-600"> * </span>
                        </label>
                        <select
                          className="form-input w-full text-gray-800"
                          value={formData.budget}
                          onChange={(e) =>
                            setFormData({ ...formData, budget: e.target.value })
                          }
                        >
                          <option value="Below $1 000"> Below $1 000 </option>
                          <option value="Between $1 000 - $10 000">
                            Between $1 000 - $10 000
                          </option>
                          <option value="Between $10 000 - $20 000">
                            Between $10 000 - $20 000
                          </option>
                          <option value="Between $20 000 - $50 000">
                            Between $20 000 - $50 000
                          </option>
                          <option value="Between $50 000 - $100 000">
                            Between $50 000 - $100 000
                          </option>
                          <option value="Above $100 000">Above $100 000</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label
                          className="block text-gray-800 text-sm font-medium mb-1"
                          htmlFor="name"
                        >
                          Message <span className="text-red-600"> * </span>
                        </label>
                        <textarea
                          id="message"
                          type="text"
                          className="form-input w-full text-gray-800"
                          placeholder="A brief summary of the problem you are having and the solution you envision"
                          required
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mt-6">
                      <div className="w-full px-3">
                        <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">
                          Submit
                        </button>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 text-center mt-3">
                      By submitting this form, you agree to the{" "}
                      <a className="underline" href="#0">
                        terms & conditions
                      </a>
                      , and our{" "}
                      <a className="underline" href="#0">
                        privacy policy
                      </a>
                      .
                    </div>
                  </form>
                  <div className="flex items-center my-6">
                    <div
                      className="border-t border-gray-300 flex-grow mr-3"
                      aria-hidden="true"
                    ></div>
                    <div className="text-gray-600 italic">Or</div>
                    <div
                      className="border-t border-gray-300 flex-grow ml-3"
                      aria-hidden="true"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
export default Contact;
