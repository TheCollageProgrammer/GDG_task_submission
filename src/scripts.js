        for (let i = 1; i <= 5; i++) {
          const header = document.getElementById(`FAQs_${i}`);

          if (header) {
            header.addEventListener('click', () => {
              header.classList.toggle('active');
            });
          }
        }

        const themeToggle = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement; 

        function setTheme(theme) {
            htmlElement.setAttribute('data-bs-theme', theme);
            localStorage.setItem('theme', theme); 
            themeToggle.checked = theme === 'dark';
        }

        themeToggle.addEventListener('change', function() {
            if (this.checked) {
                setTheme('dark');
            } else {
                setTheme('light');
            }
        });

        document.addEventListener('DOMContentLoaded', () => {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                setTheme(savedTheme);
            } else {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                setTheme(prefersDark ? 'dark' : 'light');
            }
        });