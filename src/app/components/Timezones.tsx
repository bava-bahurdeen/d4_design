// pages/timezones.tsx

import axios from 'axios';
import { GetServerSideProps } from 'next';
import React from 'react';

interface TimezoneData {
  timezone: string;
  abbreviation: string;
  utc_offset: string;
}

interface TimezonesProps {
  timezones: TimezoneData[];
}

const Timezones: React.FC<TimezonesProps> = ({ timezones }) => {
  return (
    <div>
      <h1>Timezones</h1>
      <ul>
        {timezones.map((time)=>{
            return(
                <div>
                    
                </div>
            )
        })}
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axios.get('http://worldtimeapi.org/api/timezone');
  const timezones = await Promise.all(
    response.data.slice(0, 10).map(async (timezone: string) => {
      const timezoneResponse = await axios.get(`http://worldtimeapi.org/api/timezone/${timezone}`);
      return timezoneResponse.data;
    })
  );

  return {
    props: {
      timezones,
    },
  };
};

export default Timezones;
