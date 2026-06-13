export const getYoutubeEmbedUrl = (watchUrl: string) => {
  const videoId = new URL(watchUrl).searchParams.get('v');
  return videoId ? `https://www.youtube-nocookie.com/embed/${videoId}` : watchUrl;
};
