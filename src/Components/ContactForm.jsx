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
        <div className='grid grid-rows-3 lg:grid-cols-4 gap-2 justify-items-center'>
            <input
                className="lg:col-span-1 rounded text-slate-700 text-md font-medium h-full w-full pl-2 py-1 lg:py-3"
                type="email"
                id="email"
                name="email"
                placeholder='Your Email'
                onChange={(e) => { setEmail(e.target.value); setValidationMsg('') }}
            />

            <input
                className="lg:col-span-2 rounded text-slate-700 text-md font-medium h-full w-full pl-2 py-1 lg:py-3"
                type="text"
                id="subject"
                name="subject"
                placeholder='Enter subject'
                onChange={(e) => { setSubject(e.target.value); setValidationMsg('') }}
            />

            <button
                className="lg:col-span-1 grid justify-items-center items-center w-full h-full bg-gradient-to-r from-indigo-950 to-violet-600 text-slate-300 text-sm transition duration-500 ease-in-out hover:scale-95 hover:text-white cursor-pointer rounded-lg font-semibold text-lg"
                onClick={() => submit(email, subject)}
            >
                Let's Connect
            </button>

            {
                validationMsg !== '' &&
                <span className='text-red-950 font-medium text-md'>{validationMsg}</span>
            }
        </div>
    )
}

export default ContactForm