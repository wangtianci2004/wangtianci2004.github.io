// Simple script for Tianci Wang's homepage

document.addEventListener('DOMContentLoaded', function() {
    console.log('👋🏻 Welcome to Tianci Wang\'s homepage!');
    
    // Fetch last commit date from GitHub API
    const lastUpdated = document.getElementById('last-updated');
    if (lastUpdated) {
        fetch('https://api.github.com/repos/wangtianci2004/wangtianci2004.github.io/commits/main')
            .then(response => response.json())
            .then(data => {
                const date = new Date(data.commit.committer.date);
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                const year = date.getFullYear();
                lastUpdated.textContent = `${month}/${day}/${year}`;
            })
            .catch(() => {
                lastUpdated.textContent = 'N/A';
            });
    }
});