export type PlayListItem = {
  kind: 'youtube#playlistItem';
  etag: string;
  id: string;
  contentDetails: { videoId: string; videoPublishedAt: string };
  status: { privacyStatus: string };
};

export type PlaylistItemsResponse = {
  kind: 'youtube#playlistItemListResponse';
  etag: 'string';
  items: PlayListItem[];
};
