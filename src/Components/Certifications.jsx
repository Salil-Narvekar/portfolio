import React from 'react'
import PageTitle from './PageTitle'
import Certificate from './Certificate'

const Certifications = () => {

    const certificatesObj = {
        'https://drive.google.com/file/d/1pIav6FRFMDcAab6CTe-GxXbHfuBEIkTD/view?usp=drive_link': 'Internship Completion (EnPointe IT Services)',
        'https://drive.google.com/file/d/123oBeooUtRCR_eqUXO596fsMqlemnKNF/view': 'Certified Python Programmer (NetTech India)'
    }

    return (
        <div className='h-fit grid grid-rows-12 items-start pt-20' id="Certificates">
            <div className='row-span-2 h-fit w-full'>
                <PageTitle
                    title='Certifications & Accomplishments'
                    pageDiscriptionRequired='yes'
                    pageDiscriptionLine1='A Glimpse into My Accomplishments & Certifications'
                />
            </div>


            <div className='row-span-7 grid sm:grid-cols-2 gap-4 justify-items-center items-center h-full py-4 pl-4 pr-4'>
                {
                    Object.entries(certificatesObj).map(([key_href, value_name], index) => (
                        <Certificate
                            key={index}
                            href={key_href}
                            certificateNo={index+1}
                            certificateFor={value_name}
                        />
                    ))
                }
            </div>


            {/* Position of responsibility */}
            <div className='row-span-3 grid sm:grid-rows-3 justify-items-center items-end h-full mt-4'>
                <div className='row-span-1 w-full'>
                    <PageTitle title='Positions of Responsibity' />
                </div>

                <div className='row-span-2 h-full w-full text-xs md:text-md lg:text-lg md:pl-6 lg:pl-6 py-2 text-balance'>
                    <div>
                        <span className='font-bold'>{"Hospitality HOD: "}</span>
                        <span className='text-slate-700 font-medium'>{"College's annual photography event (Drishti photography)"}</span>
                    </div>

                    <div>
                        <span className='font-bold'>{"Event head: "}</span>
                        <span className='text-slate-700 font-medium'>{"College's annual tech event (Dot-tech)"}</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Certifications