let feeds = [
    {
        profile_name : "Fashion",
        feeds_profile_image : "assets/fbcloneimg3.jpg",
        p : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, natus rerum aliquid sunt temporibus odit",
        feeds_image : "assets/fbclonefeedsimg1.jpg",
        views_p : "3.1k",
        comments : "1K Comments",
        shares : "204 Shares",
    },
    {
        profile_name : "Random",
        feeds_profile_image : "assets/fbcloneimg3.jpg",
        p : "Lorem ipsum dolor temporibus odit",
        feeds_image : "assets/fbclonefeedsimg2.jpg",
        views_p : "6.1k",
        comments : "3K Comments",
        shares : "680 Shares",
    },
    {
        profile_name : "Awesomeness",
        feeds_profile_image : "assets/fbcloneimg3.jpg",
        feeds_image : "assets/fbclonefeedsimg3.jpg",
        views_p : "2.4k",
        comments : "900 Comments",
        shares : "104 Shares",
    },
    {
        profile_name : "Travel",
        feeds_profile_image : "assets/fbcloneimg3.jpg",
        p : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, natus rerum aliquid sunt temporibus odit",
        feeds_image : "assets/fbclonefeedsimg4.jpg",
        views_p : "3.1k",
        comments : "1K Comments",
        shares : "204 Shares",
    }
];

function feeds_creator() {
    let middle_section = document.querySelector(".middle-section");
    feeds.forEach(feed => {
        let feeds = document.createElement("div");
        feeds.classList.add("feeds", "ms-feeds");
        let article = document.createElement("article");
        article.classList.add("feeds-article");
        let feeds_profile_container = document.createElement("div");
        feeds_profile_container.classList.add("feeds-profile-container", "flex", "justify-between", "align-center");
        let feeds_profile_container_child = document.createElement("div");
        feeds_profile_container_child.classList.add("flex", "justify-between");
        let feeds_profile_image = document.createElement("div");
        feeds_profile_image.classList.add("feeds-profile-image");
        let profile_img = document.createElement("img");
        profile_img.classList.add("full");
        profile_img.src = feed.feeds_profile_image;
        // Feeds Profile Image 
        feeds_profile_image.append(profile_img);
        let profile_name = document.createElement("div")
        profile_name.classList.add("feeds-profile-name");
        let h3 = document.createElement("h3"); 
        h3.innerText = feed.profile_name;
        let span_time = document.createElement("span");
        span_time.innerText = "8h";
        let feed_time_icon = document.createElement("i");
        feed_time_icon.classList.add("fas", "fa-globe-europe");
        // Span Time 
        span_time.append(feed_time_icon);
        // Profile Name
        profile_name.append(h3, span_time);
        let feeds_profile_menu = document.createElement("div");
        feeds_profile_menu.classList.add("feeds-profile-menu")
        let feeds_profile_menu_icon = document.createElement("i");
        feeds_profile_menu_icon.classList.add("fas",  "fa-ellipsis-h");
        // Profile Menu Icon
        feeds_profile_menu.append(feeds_profile_menu_icon);
        // Feeds Profile Container Child 
        feeds_profile_container_child.append(feeds_profile_image, profile_name);
        // Feeds Profile Container
        feeds_profile_container.append(feeds_profile_container_child, feeds_profile_menu);
        // 
        let result_p = feed.hasOwnProperty("p");
        let p = "";
        if(result_p === true) {
            p = document.createElement("p");
            p.innerText = feed.p;
        }
        // Article
        article.append(feeds_profile_container, p);
        // ...............................................
        // ...............................................
        let result_feeds_image = feed.hasOwnProperty("feeds_image");
        let feeds_image = "";
        if(result_feeds_image === true) {
            feeds_image = document.createElement("figure");
            feeds_image.classList.add("feeds-image");
            let feeds_image_img = document.createElement("img");
            feeds_image_img.classList.add("full");
            feeds_image_img.src = feed.feeds_image;
            // Feeds Image
            feeds_image.append(feeds_image_img);
        }
        // ..............................
        let feeds_bottom = document.createElement("div");
        feeds_bottom.classList.add("feeds-bottom");
        // .........................................
        let feeds_views = document.createElement("div");
        feeds_views.classList.add("feeds-views", "justify-between", "flex", "align-center");
        let span_views = document.createElement("span");
        let views_icon1 = document.createElement("i");
        views_icon1.classList.add("far", "fa-thumbs-up");
        let views_icon2 = document.createElement("i");
        views_icon2.classList.add("far", "fa-laugh-squint");
        let views_p = document.createElement("p");
        views_p.innerText = feed.views_p;
        // Views Span
        span_views.append(views_icon1, views_icon2, views_p);
        let span_counts = document.createElement("span");
        let comments = document.createElement("a");
        comments.innerText = feed.comments;
        comments.href = "#";
        let shares = document.createElement("a");
        shares.innerText = feed.shares;
        shares.href = "#";
        // Counts
        span_counts.append(comments, shares);
        // Feeds Views and Counts
        feeds_views.append(span_views, span_counts);
        // ..........................
        let feeds_btns = document.createElement("div");
        feeds_btns.classList.add("feeds-buttons", "flex", "justify-between");
        let like_btn = document.createElement("button");
        like_btn.classList.add("like-btn", "flex-32");
        let like_icon = document.createElement("i");
        like_icon.classList.add("far", "fa-thumbs-up");
        like_btn.innerText = "Like";
        // Like Button
        like_btn.append(like_icon);
        // ...........................................
        let comment_btn = document.createElement("button");
        comment_btn.classList.add("comment-btn", "flex-32");
        let comment_icon = document.createElement("i");
        comment_icon.classList.add("far", "fa-comment");
        comment_btn.innerText = "Comment";
        // Comment Button
        comment_btn.append(comment_icon);
        // ............................................
        let share_btn = document.createElement("button");
        share_btn.classList.add("share-btn", "flex-32");
        let share_icon = document.createElement("i");
        share_icon.classList.add("fas", "fa-share");
        share_btn.innerText = "Share";
        share_btn.append(share_icon);
        // ............................................
        feeds_btns.append(like_btn, comment_btn, share_btn);
        // Feeds Bottom
        feeds_bottom.append(feeds_views, feeds_btns);
    
        // ....................
        feeds.append(article, feeds_image, feeds_bottom);
        middle_section.append(feeds);
    });
};

// Select Main
let main = document.querySelector("main");
// Select Header
let header = document.querySelector("header");
// Select Header Middle
let header_middle = header.querySelector(".header-middle");
// Select Create Post
let create_post = document.querySelector(".create-post");
// Select Status Input
let status_input = document.querySelector(".status-input");


// add Event listener on Status input
status_input.addEventListener(`click`, () => {
    create_post.classList.remove("none");
    create_post.classList.add("block");
    main.classList.add("opacity");
    header_middle.classList.add("opacity");
});


// Close Create Post  Button

let close_btn = create_post.querySelector(".close-btn");
close_btn.addEventListener(`click`, () => {
    create_post.classList.remove("block");
    create_post.classList.add("none");
    main.classList.remove("opacity");
    header_middle.classList.remove("opacity");
});

// Select Text Area in Create Post
let text_area = create_post.querySelector("textarea");
// Select Post Button 
let post_btn = create_post.querySelector(".create-post-btn");

text_area.addEventListener(`keyup`, event => {
    if (String.fromCharCode(event.keyCode).match(/(\w|\s)/g)) {
        post_btn.classList.remove("disabled");
        post_btn.classList.add("active");
    }
});


