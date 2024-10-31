import React from 'react'
import { FaReact } from "react-icons/fa";
import { RiNodejsLine } from "react-icons/ri";
import { SiPython } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaAws } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">
            Technologies
        </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaReact className="text-7xl text-cyan-400"/>
                    React
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPython className="text-7xl text-yellow-500"/>
                    Python
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiNodejsLine className="text-7xl text-green-500"/>
                    Node.js
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaAws className="text-7xl text-orange-500"/>
                    AWS
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-500"/>
                    MongoDB
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoPostgresql className="text-7xl text-blue-600"/>
                    PostgreSQL
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTypescript className="text-7xl text-cyan-400"/>
                    TypeScript
                </div>
            </div>
        </div>
  )
}

export default Technologies