
export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
      bl_lat: '43.303836',
      bl_lng: '1.264237',
      tr_lat: '54.426299',
      tr_lng: '22.873136',
      limit: '150'
    },
    headers: {
      'x-rapidapi-key': '590bbb98ebmsh246acde1e679fadp1431f3jsn27f3c5b7de13',
      'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
    }
  };
  
  export const detailOptions ={
    headers: {
      'x-rapidapi-key': '590bbb98ebmsh246acde1e679fadp1431f3jsn27f3c5b7de13',
      'x-rapidapi-host': 'flight-radar1.p.rapidapi.com'
    }
  }