import React, { useState } from 'react'

const ContactForm = () => {

    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [validationMsg, setValidationMsg] = useState('')

    const submit = (email, subject) => {

        if (email && subject) {

            const validateEmail = (email) => {
                const format = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return format.test(email)
            }

            if(validateEmail(email)){

                window.open("https://mail.google.com/mail/?view=cm&fs=1&to=narvekarsalil1106@gmail.com&su=" + email + ' - ' + subject)
                setValidationMsg('')

            } else {
                setValidationMsg('Enter a valid Email')

            }

        } else {

            if (!email) {

                setValidationMsg('Email Required')

            } else if (!subject) {
                setValidationMsg('Subject Required')
            }
        }
    }

    return (
        <div className='grid grid-rows-3 md:grid-rows-1 md:grid-cols-4 lg:grid-rows-1 lg:grid-cols-4 gap-2 text-xs md:text-sm lg:text-md font-medium md:pl-4 md:pr-4'>
            <input
                className="md:col-span-1 lg:col-span-1 rounded-lg text-slate-700 h-full w-full pl-2 py-1 md:py-2 lg:py-3 border border-purple-300 hover:border-2"
                type="email"
                id="email"
                name="email"
                placeholder='Your Email'
                onChange={(e) => { setEmail(e.target.value); setValidationMsg('') }}
            />

            <input
                className="md:col-span-2 lg:col-span-2 rounded-lg text-slate-700 h-full w-full pl-2 py-1 md:py-2 lg:py-3 border border-purple-300 hover:border-2"
                type="text"
                id="subject"
                name="subject"
                placeholder='Enter subject'
                onChange={(e) => { setSubject(e.target.value); setValidationMsg('') }}
            />

            <button
                className="md:col-span-1 lg:col-span-1 grid justify-items-center items-center w-full h-full bg-gradient-to-b from-purple-950 to-purple-900 text-slate-300 text-xs md:text-sm lg:text-md transition duration-500 ease-in-out hover:scale-95 hover:text-white cursor-pointer rounded-lg font-semibold text-lg"
                onClick={() => submit(email, subject)}
            >
                Let's Connect
            </button>

            {
                validationMsg !== '' &&
                <span className='text-red-950'>{validationMsg}</span>
            }
        </div>
    )
}

export default ContactForm