import React from 'react';
import arrow from '../assets/drop-arrow.svg';
import attachicon from  '../assets/attachfile.svg'

const DocumentCard = () => {
    return (
        <section className="flex flex-col bg-white rounded-lg p-6 gap-4">
            <h3 className="font-bold">Documents:</h3>
            <table className="w-full">
                <thead>
                    <tr>
                        <th>
                            <div className='flex gap-2'>
                                Title
                                <img src={arrow} alt="" />
                            </div>
                        </th>
                        <th>
                            <div className='flex gap-2'>
                                Owner
                                <img src={arrow} alt="" />
                            </div>
                        </th>
                        <th>Last Modified</th>
                        <th>File Size</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="border-2">
                        <td className="flex items-center gap-2 ml-2">
                            <img src={arrow} alt="" />
                            Architectural Concepts Draft 1
                        </td>
                        <td>
                            <img src={arrow} alt="" />
                        </td>
                        <td className="text-center">08/27/2023</td>
                        <td className="text-center">2 MB</td>
                    </tr>
                </tbody>
            </table>
            <button className="border-2 border-black ml-auto px-4 py-1 rounded-full flex gap-2 text-[#0F1420] font-medium">
                <img src={attachicon} alt="attach file icon" />
                Attach Files
            </button>
        </section>
    );
}

export default DocumentCard;
