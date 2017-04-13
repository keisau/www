export const initGoogleAnalytics = function initGoogleAnalytics() {
  ga('create', 'UA-97190319-1', 'auto')
  ga('send', 'pageview')
}

export const sendBlogsView = function sendBlogsView() {
  ga(tracker => {
    tracker.send('send', {
      hitType: 'event',
      eventCategory: 'Blogs',
      eventAction: 'view',
      eventLabel: 'all'
    })
  })
}

export const sendBlogView = function sendBlogView({
  name
}) {
  ga(tracker => {
    tracker.send('send', {
      hitType: 'event',
      eventCategory: 'Blog',
      eventAction: 'view',
      eventLabel: name,
    })
  })
}
