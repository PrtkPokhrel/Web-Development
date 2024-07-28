document.getElementById('bookmark-form').addEventListener('submit', addBookmark);

function addBookmark(e) {
    e.preventDefault();

    const name = document.getElementById('website-name').value;
    const url = document.getElementById('website-url').value;

    if (!validateForm(name, url)) {
        return false;
    }

    const bookmark = {
        name,
        url
    };

    if (localStorage.getItem('bookmarks') === null) {
        const bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    document.getElementById('bookmark-form').reset();

    fetchBookmarks();
}

function deleteBookmark(url) {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    for (let i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].url === url) {
            bookmarks.splice(i, 1);
        }
    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    fetchBookmarks();
}

function fetchBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    const bookmarkList = document.getElementById('bookmark-list');

    bookmarkList.innerHTML = '';

    for (const bookmark of bookmarks) {
        const name = bookmark.name;
        const url = bookmark.url;

        bookmarkList.innerHTML += `
            <li>
                <a href="${url}" target="_blank">${name}</a>
                <button class="delete" onclick="deleteBookmark('${url}')">Delete</button>
            </li>
        `;
    }
}

function validateForm(name, url) {
    if (!name || !url) {
        alert('Please fill in the form');
        return false;
    }

    const expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);

    if (!url.match(regex)) {
        alert('Please use a valid URL');
        return false;
    }

    return true;
}

// Fetch bookmarks on page load
document.addEventListener('DOMContentLoaded', fetchBookmarks);
