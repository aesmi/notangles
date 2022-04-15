
/**
 * Get the term that currently has data populated for course schedules.
 * @returns termDate string.
 */
export const getLatestAvailableDataTerm = async () => {  

    const year = new Date().getFullYear();
    let termDate = '';
    let termRoulette = ["T3", "T2", "T3"];

    for (let i = 0; i < termRoulette.length; i++) { 
      let terms = termRoulette[i];
      let urlData =
        "https://timetable.csesoc.app/api/terms/"+year+"-"+terms+"/freerooms/";
        const res = await fetch(urlData)
        const data = await res.json();
        const termStartString = await data["termStart"];
        if (termDate == '') {
          // Set it as the first term when initially 
          // setting the termDate variable.
          termDate = termStartString;
        }

        if (Object.keys(data).length != 1) {
          // For every term with a start date and extra fields, 
          // set that as the most recent term date and cycle.
          termDate = termStartString;
        } 

    }

    return termDate;
    
  }