import React from 'react'
import { Element } from 'react-scroll';

const Footer = () => {
  return (
    <Element name="footer">
        <footer>
            <div className="flex flex-col justify-center items-center p-5 gap-7 shadow-2xl">
                <h1 className="text-5xl font-semibold p-4">Priyanshu Raj</h1>
                <div id="icons"  className="text-5xl gap-7 flex">
                    <a href="https://github.com/Priyanshu354"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/priyanshu-raj-96314525a/"><i className="fa-brands fa-linkedin"></i></a>
                </div>
                <h1 className="font-medium"> Click above visit me <span className="mx-4"><i className="fa-solid fa-arrow-up-long"></i></span></h1>
            </div>
        </footer>
    </Element>
  )
}
export default Footer