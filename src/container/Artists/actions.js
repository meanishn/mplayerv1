import axios from 'axios';

export function fetchArtist(artistId) {
    return async (dispatch) => {
        const req = await axios.get(`http://localhost:4000/api/artists/${artistId}?_embed=tracks`);
        const artist = req.data;
        dispatch({
            type: 'FETCH_ARTIST',
            payload: artist
        })
    }
}