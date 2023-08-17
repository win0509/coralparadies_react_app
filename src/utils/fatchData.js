export const getOptions ={
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_KEY,
          'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
        }
      
};


export const fetchData = async (url, option) => {
    const response = await fetch(url, option);
    const data = await response.json();

    return data;
}