import React from 'react';


const HogsDetails = (props) => {

    return (

      <div>
        <h3>{props.hog.specialty}</h3>
        <h3>{props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</h3>
        <h3>{props.hog['highest medal achieved']}</h3>
      </div>
    )


}

export default HogsDetails;
