const GLOBAL_KEY = "*";
const DEFAULT_RULE = {
  pattern: "",
  selector: "",
  keepSelector: "",
  terms: "",
  translator: GLOBAL_KEY,
  fromLang: GLOBAL_KEY,
  toLang: GLOBAL_KEY,
  textStyle: GLOBAL_KEY,
  transOpen: GLOBAL_KEY,
  bgColor: "",
  textDiyStyle: "",
};

const DEFAULT_SELECTOR = `:is(li, p, h1, h2, h3, h4, h5, h6, dd, blockquote)`;
const RULES_MAP = {
  "www.google.com/search": [`h3, .IsZvec, .VwiC3b`],
  "news.google.com": [`[data-n-tid], ${DEFAULT_SELECTOR}`],
  "www.foxnews.com": [
    `h1, h2, .title, .sidebar [data-type="Title"], .article-content ${DEFAULT_SELECTOR}; [data-spotim-module="conversation"]>div >>> [data-spot-im-class="message-text"] p,  [data-spot-im-class="message-text"]`,
  ],
  "bearblog.dev, www.theverge.com, www.tampermonkey.net/documentation.php": [
    `${DEFAULT_SELECTOR}`,
  ],
  "themessenger.com": [
    `.leading-tight, .leading-tighter, .my-2 p, .font-body p, article ${DEFAULT_SELECTOR}`,
  ],
  "www.telegraph.co.uk, go.dev/doc/": [`article ${DEFAULT_SELECTOR}`],
  "www.theguardian.com": [
    `.show-underline, .dcr-hup5wm div, .dcr-7vl6y8 div, .dcr-12evv1c, figcaption, article ${DEFAULT_SELECTOR}, [data-cy="mostviewed-footer"] h4`,
  ],
  "www.semafor.com": [
    `${DEFAULT_SELECTOR}, .styles_intro__IYj__, [class*="styles_description"]`,
  ],
  "www.noemamag.com": [
    `.splash__title, .single-card__title, .single-card__type, .single-card__topic, .highlighted-content__title, .single-card__author, article ${DEFAULT_SELECTOR}, .quote__text, .wp-caption-text div`,
  ],
  "restofworld.org": [
    `${DEFAULT_SELECTOR}, .recirc-story__headline, .recirc-story__dek`,
  ],
  "www.axios.com": [`.h7, ${DEFAULT_SELECTOR}`],
  "www.newyorker.com": [
    `.summary-item__hed, .summary-item__dek, .summary-collection-grid__dek, .dqtvfu, .rubric__link, .caption, article ${DEFAULT_SELECTOR}, .HEhan ${DEFAULT_SELECTOR}, .ContributorBioBio-fBolsO, .BaseText-ewhhUZ`,
  ],
  "time.com": [
    `h1, h3, .summary, .video-title, #article-body ${DEFAULT_SELECTOR}, .image-wrap-container .credit.body-caption, .media-heading`,
  ],
  "www.dw.com": [
    `.ts-teaser-title a, .news-title a, .title a, .teaser-description a, .hbudab h3, .hbudab p, figcaption ,article ${DEFAULT_SELECTOR}`,
  ],
  "www.bbc.com": [
    `h1, h2, .media__link, .media__summary, article ${DEFAULT_SELECTOR}, .ssrcss-y7krbn-Stack, .ssrcss-17zglt8-PromoHeadline, .ssrcss-18cjaf3-Headline, .gs-c-promo-heading__title, .gs-c-promo-summary, .media__content h3, .article__intro, .lx-c-summary-points>li`,
  ],
  "www.chinadaily.com.cn": [
    `h1, .tMain [shape="rect"], .cMain [shape="rect"], .photo_art [shape="rect"], .mai_r [shape="rect"], .lisBox li, #Content ${DEFAULT_SELECTOR}`,
  ],
  "www.facebook.com": [`[role="main"] [dir="auto"]`],
  "www.reddit.com, new.reddit.com, sh.reddit.com": [
    `:is(#AppRouter-main-content, #overlayScrollContainer) :is([class^=tbIA],[class^=_1zP],[class^=ULWj],[class^=_2Jj], [class^=_334],[class^=_2Gr],[class^=_7T4],[class^=_1WO], ${DEFAULT_SELECTOR}); [id^="post-title"], :is([slot="text-body"], [slot="comment"]) ${DEFAULT_SELECTOR}, recent-posts h3, aside :is(span:has(>h2), p); shreddit-subreddit-header >>> :is(#title, #description)`,
  ],
  "www.quora.com": [`.qu-wordBreak--break-word`],
  "edition.cnn.com": [
    `.container__title, .container__headline, .headline__text, .image__caption, [data-type="Title"], .article__content ${DEFAULT_SELECTOR}`,
  ],
  "www.reuters.com": [
    `#main-content [data-testid="Heading"], #main-content [data-testid="Body"], .article-body__content__17Yit ${DEFAULT_SELECTOR}`,
  ],
  "www.bloomberg.com": [
    `[data-component="headline"], [data-component="related-item-headline"], [data-component="title"], article ${DEFAULT_SELECTOR}`,
  ],
  "deno.land, docs.github.com": [`main ${DEFAULT_SELECTOR}`, `code, img, svg`],
  "doc.rust-lang.org": [`.content ${DEFAULT_SELECTOR}`, `code, img, svg`],
  "www.indiehackers.com": [
    `h1, h3, .content ${DEFAULT_SELECTOR}, .feed-item__title-link`,
  ],
  "platform.openai.com/docs": [
    `.docs-body ${DEFAULT_SELECTOR}`,
    `code, img, svg`,
  ],
  "en.wikipedia.org": [
    `h1, .mw-parser-output ${DEFAULT_SELECTOR}`,
    `.mwe-math-element`,
  ],
  "stackoverflow.com, serverfault.com, superuser.com, stackexchange.com, askubuntu.com, stackapps.com, mathoverflow.net": [
    `.s-prose ${DEFAULT_SELECTOR}, .comment-copy, .question-hyperlink, .s-post-summary--content-title, .s-post-summary--content-excerpt`,
    `code, img, svg, .math-container`,
  ],
  "www.npmjs.com/package, developer.chrome.com/docs, medium.com, developers.cloudflare.com, react.dev, create-react-app.dev, pytorch.org":
    [`article ${DEFAULT_SELECTOR}`],
  "news.ycombinator.com": [`.title, p`],
  "github.com": [
    `.markdown-body ${DEFAULT_SELECTOR}, .repo-description p, .Layout-sidebar .f4, .container-lg .py-4 .f5, .container-lg .my-4 .f5, .Box-row .pr-4, .Box-row article .mt-1, [itemprop="description"], .markdown-title, bdi, .ws-pre-wrap, .status-meta, span.status-meta, .col-10.color-fg-muted, .TimelineItem-body, .pinned-item-list-item-content .color-fg-muted, .markdown-body td, .markdown-body th`,
    `code, img, svg`,
  ],
  "twitter.com": [
    `[data-testid="tweetText"], [data-testid="birdwatch-pivot"]>div.css-1rynq56`,
    `img, a, .r-18u37iz, .css-175oi2r`,
  ],
  "m.youtube.com": [
    `.slim-video-information-title .yt-core-attributed-string, .media-item-headline .yt-core-attributed-string, .comment-text .yt-core-attributed-string, .typography-body-2b .yt-core-attributed-string, #ytp-caption-window-container .ytp-caption-segment`,
  ],
  "www.youtube.com": [
    `h1, #video-title, #content-text, #title, yt-attributed-string>span>span, #ytp-caption-window-container .ytp-caption-segment`,
  ],
  "bard.google.com": [
    `.query-content ${DEFAULT_SELECTOR}, message-content ${DEFAULT_SELECTOR}`,
  ],
  "www.bing.com, copilot.microsoft.com": [
    `.b_algoSlug, .rwrl_padref; .cib-serp-main >>> .ac-textBlock ${DEFAULT_SELECTOR}, .text-message-content div`,
  ],
  "www.phoronix.com": [`article ${DEFAULT_SELECTOR}`],
  "wx2.qq.com": [`.js_message_plain`],
  "app.slack.com/client/": [
    `.p-rich_text_section, .c-message_attachment__text, .p-rich_text_list li`,
  ],
  "discord.com/channels/": [
    `div[class^=message], div[class^=headerText], div[class^=name_], section[aria-label='Search Results'] div[id^=message-content], div[id^=message]`,
    `li[class^='card'] div[class^='message'], [class^='embedFieldValue'], [data-list-item-id^='forum-channel-list'] div[class^='headerText']`,
  ],
  "t.me/s/": [`.js-message_text ${DEFAULT_SELECTOR}`],
  "web.telegram.org/k": [
    `div.kiss-p`,
    `div[class^=time], .peer-title, .document-wrapper, .message.spoilers-container custom-emoji-element, reactions-element`,
  ],
  "web.telegram.org/a": [
    `.text-content > .kiss-p`,
    `.Reactions, .time, .peer-title, .document-wrapper, .message.spoilers-container custom-emoji-element`,
  ],
  "www.instagram.com/": [`h1, article span[dir=auto] > span[dir=auto], ._ab1y`],
  "www.instagram.com/p/,www.instagram.com/reels/": [
    `h1, div[class='x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1uhb9sk x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1cy8zhl x1oa3qoh x1nhvcw1'] > span[class='x1lliihq x1plvlek xryxfnj x1n2onr6 x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1i0vuye xvs91rp xo1l8bm x5n08af x10wh9bi x1wdrske x8viiok x18hxmgj'], span[class='x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs xt0psk2 x1i0vuye xvs91rp xo1l8bm x5n08af x10wh9bi x1wdrske x8viiok x18hxmgj']`,
  ],
  "mail.google.com": [`${DEFAULT_SELECTOR}, span[data-thread-id]`],
  "web.whatsapp.com": [`.copyable-text > span`],
  "chat.openai.com": [
    `div[data-message-author-role] > div ${DEFAULT_SELECTOR}`,
  ],
  "forum.ru-board.com": [`.tit, .dats, .kiss-p, .lgf ${DEFAULT_SELECTOR}`],
  "education.github.com": [
    `${DEFAULT_SELECTOR}, a, summary, span.Button-content`,
  ],
  "blogs.windows.com": [`${DEFAULT_SELECTOR}, .c-uhf-nav-link, figcaption`],
  "developer.apple.com/documentation/": [
    `#main ${DEFAULT_SELECTOR}, #main .abstract .content, #main .abstract.content, #main .link span`,
    `code, img, svg`,
  ],
  "greasyfork.org": [
    `h2, .script-link, .script-description, #additional-info ${DEFAULT_SELECTOR}`,
  ],
  "www.fmkorea.com": [`#container ${DEFAULT_SELECTOR}`],
  "forum.arduino.cc": [
    `.top-row>.title, .featured-topic>.title, .link-top-line>.title, .category-description, .topic-excerpt, .fancy-title, .cooked ${DEFAULT_SELECTOR}`,
  ],
  "docs.arduino.cc": [`[class^="tutorial-module--left"] ${DEFAULT_SELECTOR}`],
  "www.historydefined.net": [`.wp-element-caption, ${DEFAULT_SELECTOR}`],
  "gobyexample.com": [`.docs p`, `code`],
  "go.dev/tour": [`#left-side ${DEFAULT_SELECTOR}`, `code, img, svg >>> code`],
  "pkg.go.dev": [
    `.Documentation-content ${DEFAULT_SELECTOR}`,
    `code, img, svg, a, span`,
  ],
  "docs.rs": [
    `.docblock ${DEFAULT_SELECTOR}, .docblock-short`,
    `code >>> code`,
  ],
  "randomnerdtutorials.com": [`article ${DEFAULT_SELECTOR}`],
  "forum.arduino.cc": [
    `.top-row>.title, .featured-topic>.title, .link-top-line>.title, .category-description, .topic-excerpt, .fancy-title, .cooked ${DEFAULT_SELECTOR}`,
  ],
};

const globalRules = Object.entries(RULES_MAP)
  .sort((a, b) => a[0].localeCompare(b[0]))
  .map(([pattern, [selector, keepSelector = "", terms = ""]]) => ({
    ...DEFAULT_RULE,
    pattern,
    selector,
    keepSelector,
    terms,
  }));
const onRules = globalRules.map((rule) => ({ ...rule, transOpen: "true" }));
const offRules = globalRules.map((rule) => ({ ...rule, transOpen: "false" }));

export default {
  "kiss-rules": globalRules,
  "kiss-rules-on": onRules,
  "kiss-rules-off": offRules,
};
