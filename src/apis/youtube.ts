import axios from 'axios';
import { API_BASE_URL, API_KEY, MAX_RESULTS } from 'constants/youtube';
import { PlaylistItemsResponse } from 'types/youtube';

const youtube = axios.create({
  baseURL: API_BASE_URL,
  params: {
    key: API_KEY,
    maxResults: MAX_RESULTS,
  },
});

export const getPlaylistItems = async (playlistId: string) =>
  (
    await youtube.get<PlaylistItemsResponse>('/playlistItems', {
      params: { part: 'contentDetails,status', playlistId },
    })
  ).data.items;

export default youtube;
