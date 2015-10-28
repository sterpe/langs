// Design "live" comments.  If your `facebook.com` homepage is open
// with a bunch of feeds and if someone comments on those feeds, the
// comments should automatically show up on my `facebook.com` homepage
// without refreshing the page.  Feeds could be a simple status update 
// by a friend, post in a group, post by a person you're following,
// post in a page you've liked, etc.

// Few things they are looking for -
//
// 1.  How do you solve it initially and how do you scale it?
// 2.  How do you scale PUSH model, if you chose PUSH model to solve it?
// 3.  If PUSH cannot scale how do you solve it?
// 4.  How PULL model solves it?
// 5.  When will you use PUSH vs. PULL?

// My thoughts:

// PUSH model advantages are instantaneous updates, but 
// requires either a dedicated long term COMET connection or 
// websocket.
// Websocket or long-polling, primarly, also pushlet.
// Chunked transfer encoding is the mechanism.
// -- client does not need to know length of the data before
//    it is sent.
