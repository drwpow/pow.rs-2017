export function format(date: string): string {
  const hr = new Date(date).toUTCString().split(' ');
  return hr[1] + ' ' + hr[2] + ' ' + hr[3];
}

export function sortPosts(posts: { date: string }[]): { date: string }[] {
  // @ts-ignore
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  return posts;
}
