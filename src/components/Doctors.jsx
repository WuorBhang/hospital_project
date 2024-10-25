import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';

const doctors = [
  {
    id: 1,
    name: 'Dr. Amber Jones',
    specialty: 'Oncologist',
    contact: '274-476-9343',
    lastVisit: '2024-10-01',
    status: 'Available',
  },
  {
    id: 2,
    name: 'Dr. Jeffery Bowen',
    specialty: 'Dermatologist',
    contact: '6979862723',
    lastVisit: '2024-10-02',
    status: 'Available',
  },
  {
    id: 3,
    name: 'Dr. Dawn Mitchell',
    specialty: 'General Practitioner',
    contact: '669.386.6385',
    lastVisit: '2024-10-03',
    status: 'Available',
  },
  {
    id: 4,
    name: 'Dr. Michael Saunders',
    specialty: 'Dermatologist',
    contact: '(906)316-3702x59140',
    lastVisit: '2024-10-04',
    status: 'Available',
  },
  {
    id: 5,
    name: 'Dr. Thomas Wilson',
    specialty: 'Psychiatrist',
    contact: '278-513-1531x466',
    lastVisit: '2024-10-05',
    status: 'Available',
  },
  {
    id: 6,
    name: 'Dr. Rachel Gonzalez',
    specialty: 'Cardiologist',
    contact: '+1-359-300-7827x3489',
    lastVisit: '2024-10-06',
    status: 'Available',
  },
  {
    id: 7,
    name: 'Dr. Jamie Gonzalez',
    specialty: 'Dermatologist',
    contact: '807-854-1870x08697',
    lastVisit: '2024-10-07',
    status: 'Available',
  },
  {
    id: 8,
    name: 'Dr. Denise Stanton',
    specialty: 'Cardiologist',
    contact: '(880)380-2691',
    lastVisit: '2024-10-08',
    status: 'Available',
  },
  {
    id: 9,
    name: 'Dr. Anne Kane',
    specialty: 'Dermatologist',
    contact: '325.285.8149x66900',
    lastVisit: '2024-10-09',
    status: 'Available',
  },
  {
    id: 10,
    name: 'Dr. Vanessa Harris',
    specialty: 'Oncologist',
    contact: '(294)417-0771',
    lastVisit: '2024-10-10',
    status: 'Available',
  },
  {
    id: 11,
    name: 'Dr. Jason Holder',
    specialty: 'Neurologist',
    contact: '+1-484-929-3640x850',
    lastVisit: '2024-10-11',
    status: 'Available',
  },
  {
    id: 12,
    name: 'Dr. Marcus Obrien',
    specialty: 'General Practitioner',
    contact: '876-931-3621',
    lastVisit: '2024-10-12',
    status: 'Available',
  },
  {
    id: 13,
    name: 'Dr. Francisco Brown',
    specialty: 'Oncologist',
    contact: '+1-537-337-3687',
    lastVisit: '2024-10-13',
    status: 'Available',
  },
  {
    id: 14,
    name: 'Dr. Morgan Gutierrez',
    specialty: 'Oncologist',
    contact: '675-831-7968',
    lastVisit: '2024-10-14',
    status: 'Available',
  },
  {
    id: 15,
    name: 'Dr. Kim Williamson',
    specialty: 'Pediatrician',
    contact: '844.366.2973x4183',
    lastVisit: '2024-10-15',
    status: 'Available',
  },
  {
    id: 16,
    name: 'Dr. Olivia Barton',
    specialty: 'Pediatrician',
    contact: '580.337.6834x39363',
    lastVisit: '2024-10-16',
    status: 'Available',
  },
  {
    id: 17,
    name: 'Dr. Michael Lucas',
    specialty: 'General Practitioner',
    contact: '6897113246',
    lastVisit: '2024-10-17',
    status: 'Available',
  },
  {
    id: 18,
    name: 'Dr. Adam Sims',
    specialty: 'Pediatrician',
    contact: '785-931-2026x4978',
    lastVisit: '2024-10-18',
    status: 'Available',
  },
  {
    id: 19,
    name: 'Dr. Lori Baker',
    specialty: 'Cardiologist',
    contact: '655.760.4250',
    lastVisit: '2024-10-19',
    status: 'Available',
  },
  {
    id: 20,
    name: 'Dr. Annette Barrera',
    specialty: 'Cardiologist',
    contact: '(343)405-3240',
    lastVisit: '2024-10-20',
    status: 'Available',
  },
  {
    id: 21,
    name: 'Dr. James Shannon',
    specialty: 'General Practitioner',
    contact: '406-578-6980',
    lastVisit: '2024-10-21',
    status: 'Available',
  },
  {
    id: 22,
    name: 'Dr. Leonard Fox',
    specialty: 'Dermatologist',
    contact: '486.623.8106x01434',
    lastVisit: '2024-10-22',
    status: 'Available',
  },
  {
    id: 23,
    name: 'Dr. Phillip Howard',
    specialty: 'Pediatrician',
    contact: '+1-858-734-5005x998',
    lastVisit: '2024-10-23',
    status: 'Available',
  },
  {
    id: 24,
    name: 'Dr. Melissa Garrison',
    specialty: 'Cardiologist',
    contact: '(713)978-6447',
    lastVisit: '2024-10-24',
    status: 'Available',
  },
  {
    id: 25,
    name: 'Dr. Jason Ramirez',
    specialty: 'Pediatrician',
    contact: '+1-316-525-0922',
    lastVisit: '2024-10-25',
    status: 'Available',
  },
  {
    id: 26,
    name: 'Dr. Stanley Vincent',
    specialty: 'General Practitioner',
    contact: '001-483-531-5767x190',
    lastVisit: '2024-10-26',
    status: 'Available',
  },
  {
    id: 27,
    name: 'Dr. Richard Hess',
    specialty: 'Dermatologist',
    contact: '(621)486-5363',
    lastVisit: '2024-10-27',
    status: 'Available',
  },
  {
    id: 28,
    name: 'Dr. Samuel Hood',
    specialty: 'Pediatrician',
    contact: '(533)287-5109x3421',
    lastVisit: '2024-10-28',
    status: 'Available',
  },
  {
    id: 29,
    name: 'Dr. Miranda Allison',
    specialty: 'Neurologist',
    contact: '697.251.1472x563',
    lastVisit: '2024-10-29',
    status: 'Available',
  },
  {
    id: 30,
    name: 'Dr. Rhonda Hill',
    specialty: 'Pediatrician',
    contact: '001-943-701-7474x128',
    lastVisit: '2024-10-30',
    status: 'Available',
  },
  {
    id: 31,
    name: 'Dr. Lindsay Dean',
    specialty: 'General Practitioner',
    contact: '911.300.1986x3186',
    lastVisit: '2024-10-31',
    status: 'Available',
  },
  {
    id: 32,
    name: 'Dr. Tracy Jackson',
    specialty: 'Cardiologist',
    contact: '857-475-7170x84626',
    lastVisit: '2024-11-01',
    status: 'Available',
  },
  {
    id: 33,
    name: 'Dr. Anna Brown',
    specialty: 'Pediatrician',
    contact: '583.448.5295x1524',
    lastVisit: '2024-11-02',
    status: 'Available',
  },
  {
    id: 34,
    name: 'Dr. Edward Robbins',
    specialty: 'Dermatologist',
    contact: '(435)690-5015',
    lastVisit: '2024-11-03',
    status: 'Available',
  },
  {
    id: 35,
    name: 'Dr. Christine Horton DVM',
    specialty: 'Dermatologist',
    contact: '+1-697-847-5391x1835',
    lastVisit: '2024-11-04',
    status: 'Available',
  },
  {
    id: 36,
    name: 'Dr. Sarah Greene',
    specialty: 'Neurologist',
    contact: '001-323-578-4310x175',
    lastVisit: '2024-11-05',
    status: 'Available',
  },
  {
    id: 37,
    name: 'Dr. Thomas Lee',
    specialty: 'Oncologist',
    contact: '+1-723-591-7461',
    lastVisit: '2024-11-06',
    status: 'Available',
  },
  {
    id: 38,
    name: 'Dr. Joshua Wong',
    specialty: 'Oncologist',
    contact: '(975)313-4941x53148',
    lastVisit: '2024-11-07',
    status: 'Available',
  },
  {
    id: 39,
    name: 'Dr. Jessica Kim',
    specialty: 'General Practitioner',
    contact: '640-499-0288x8126',
    lastVisit: '2024-11-08',
    status: 'Available',
  },
  {
    id: 40,
    name: 'Dr. Charles Martinez',
    specialty: 'Cardiologist',
    contact: '(278)076-2581x94864',
    lastVisit: '2024-11-09',
    status: 'Available',
  },
];


function Doctors() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
        <h1 className="text-2xl font-semibold text-gray-900">Doctors</h1>
        <div className="flex space-x-4">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Search doctors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <Plus className="-ml-1 mr-2 h-5 w-5" />
            Add Doctor
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Specialty
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Last Visit
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {doctors.map((doctor) => (
                <tr key={doctor.id} className="hover:bg-gray-50">
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{doctor.name}</div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-sm text-gray-500">{doctor.specialty}</div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-sm text-gray-500">{doctor.contact}</div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-sm text-gray-500">{doctor.lastVisit}</div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${doctor.status === 'Available'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                        }`}
                    >
                      {doctor.status}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900">View</button>
                    <span className="mx-2 text-gray-300">|</span>
                    <button className="text-blue-600 hover:text-blue-900">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Doctors;
