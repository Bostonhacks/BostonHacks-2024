import React from 'react';
import Title from './Title';

const ScheduleComponent = ({ title, data }) => {
  return (
    <div className="flex flex-col items-center text-white mt-10 w-full max-w-4xl bg-black bg-opacity-50 p-8 rounded-lg shadow-lg mx-4">

      <table className="w-full text-white">
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="w-full">
              <td className="font-sevenSegment text-lg lg:text-4xl p-4 text-right pr-8 w-1/3">
                {item.time}
              </td>
              <td className="font-carroisGothic text-lg lg:text-4xl p-4 border-l-4 text-left pl-8 w-2/3" style={{ borderColor: '#FC4A1A' }}>
                {item.tableEntry}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function Schedule() {
  const saturday = [
    { time: '9:00 AM', tableEntry: 'Check In' },
    { time: '10:00 AM', tableEntry: 'Opening Ceremony' },
    { time: '12:00 PM', tableEntry: 'Lunch' },
    { time: '6:00 PM', tableEntry: 'Dinner' },
    { time: '10:00 PM', tableEntry: 'Sleep' },
    // Add more entries as needed
  ];

  const sunday = [
    { time: '8:00 AM', tableEntry: 'Breakfast' },
    { time: '10:00 AM', tableEntry: 'Submissions Due' },
    { time: '2:00 PM', tableEntry: 'Closing Ceremony' },
    // Add more entries as needed
  ];

  return (
    <div id="schedule" className="flex justify-center items-center flex-col w-full overflow-clip pb-20">
      <Title>SCHEDULE</Title>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-10">
        <ScheduleComponent className="grid-cols-1" title="Saturday" data={saturday} />
        <ScheduleComponent className="grid-cols-1" title="Sunday" data={sunday} />
      </div>
    </div>
  );
}
