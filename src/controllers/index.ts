import { randomInt } from 'crypto';
import type { RequestHandler } from 'express';
import { isAxiosError } from 'axios';

import { getPlaylistItems } from 'apis/youtube';
import { VIDEO_BASE_URL } from 'constants/youtube';

export const root: RequestHandler = (req, res) => {
  res.send({ success: true, message: 'Hello world!' });
};

export const randomPlaylistVid: RequestHandler = async (req, res, next) => {
  const playlistId = req.params.id;

  try {
    const playlistItems = (await getPlaylistItems(playlistId)).filter(
      (item) => item.status.privacyStatus === 'public'
    );

    const randomVidId =
      playlistItems[randomInt(playlistItems.length)].contentDetails.videoId;

    res.redirect(`${VIDEO_BASE_URL}/${randomVidId}`);
  } catch (err) {
    if (!isAxiosError(err)) return next(err);
    else res.send(err.response?.data);
  }
};
