// utils used here to handle functions that are reusable one

// here we are connecting rapid api

export const exerciseOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
      'x-rapidapi-key': 'f861b32e18msh87e69eb7f2bbc2bp1ae633jsnef5aed115b09'
    }
  };

   export const youtubeOptions = {
    method: 'GET',
    
    headers: {
      'x-rapidapi-key': 'faafd72c74msh2bfcb48dcef7ee9p178240jsn64af14628e8b',

      'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  
export const fetchData=async(url,options)=>{
    const response=await fetch(url,options);
    const data=await response.json();

    return data;

}