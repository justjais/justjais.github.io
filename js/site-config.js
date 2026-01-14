/**
 * Site Configuration
 * 
 * Centralized static content for the blog.
 * Update values here to change content across all pages.
 */

const SiteConfig = {
    // Author Information
    author: {
        name: "Sumit Jaiswal",
        title: "Full Stack Developer",
        profilePic: "images/pic/my-pic.png",
        bio: "Currently works @ Ansible by Redhat as SSE."
    },

    // Contact Information
    contact: {
        email: "justjais@gmail.com",
        availableHours: "Mon - Fri 09:00 - 18:00"
    },

    // Social Media Links
    social: {
        twitter: "https://twitter.com/justsumit",
        linkedin: "https://www.linkedin.com/in/sumit-jaiswal-6a480467/",
        github: "https://github.com/justjais",
        stackoverflow: "https://stackoverflow.com/users/4506668/justjais?tab=profile"
    },

    // Site Information
    site: {
        name: "$JBlog",
        title: "$j_Blog",
        url: "https://justjais.github.io",
        copyrightYear: "2026",
        get copyrightText() {
            return `© Copyright ${this.copyrightYear} ${this.name}. All rights reserved`;
        }
    },

    // SEO Defaults
    seo: {
        defaultAuthor: "Sumit Jaiswal",
        defaultKeywords: "ansible, automation, devops, python, docker, infoblox",
        pages: {
            index: {
                description: "Technical blog by Sumit Jaiswal covering Ansible automation, Python development, DevOps practices, and cloud technologies."
            },
            about: {
                description: "Learn about Sumit Jaiswal - Full Stack Developer specializing in Ansible automation, Python, and DevOps engineering."
            },
            work: {
                description: "Portfolio and work samples by Sumit Jaiswal showcasing projects in Ansible, Python, and automation solutions."
            },
            contact: {
                description: "Get in touch with Sumit Jaiswal for collaboration on automation, DevOps, and software development projects."
            },
            ansible_infoblox: {
                description: "Learn how to automate Infoblox DDI (DNS, DHCP, IPAM) using Ansible playbooks with step-by-step examples and code."
            },
            ansible_venv: {
                description: "Guide to setting up Ansible virtual environments for isolated development and testing of automation playbooks."
            },
            python_venv: {
                description: "Complete guide to managing multiple Python versions using pyenv and virtual environments on Mac and Linux."
            },
            docker: {
                description: "Docker automation tutorials and best practices for containerized application deployment and management."
            },
            single: {
                description: "Technical blog post on automation and DevOps best practices by Sumit Jaiswal."
            }
        }
    }
};

/**
 * Initialize site content on DOM ready
 */
document.addEventListener('DOMContentLoaded', function () {
    // Update author name
    const authorNameElements = document.querySelectorAll('[data-config="author-name"]');
    authorNameElements.forEach(el => {
        el.textContent = SiteConfig.author.name;
    });

    // Update author title
    const authorTitleElements = document.querySelectorAll('[data-config="author-title"]');
    authorTitleElements.forEach(el => {
        el.textContent = SiteConfig.author.title;
    });

    // Update copyright text
    const copyrightElements = document.querySelectorAll('[data-config="copyright"]');
    copyrightElements.forEach(el => {
        el.textContent = SiteConfig.site.copyrightText;
    });

    // Update social links
    const twitterLinks = document.querySelectorAll('[data-config="social-twitter"]');
    twitterLinks.forEach(el => {
        el.href = SiteConfig.social.twitter;
    });

    const linkedinLinks = document.querySelectorAll('[data-config="social-linkedin"]');
    linkedinLinks.forEach(el => {
        el.href = SiteConfig.social.linkedin;
    });

    const githubLinks = document.querySelectorAll('[data-config="social-github"]');
    githubLinks.forEach(el => {
        el.href = SiteConfig.social.github;
    });

    const stackoverflowLinks = document.querySelectorAll('[data-config="social-stackoverflow"]');
    stackoverflowLinks.forEach(el => {
        el.href = SiteConfig.social.stackoverflow;
    });

    // Update "Article By" author links
    const articleByElements = document.querySelectorAll('[data-config="article-author"]');
    articleByElements.forEach(el => {
        el.textContent = SiteConfig.author.name;
    });

    // Update contact email
    const emailElements = document.querySelectorAll('[data-config="contact-email"]');
    emailElements.forEach(el => {
        if (el.tagName === 'A') {
            el.href = 'mailto:' + SiteConfig.contact.email;
            el.textContent = SiteConfig.contact.email;
        } else {
            el.textContent = SiteConfig.contact.email;
        }
    });

    // Update meta description based on page
    const pageName = getPageName();
    if (pageName && SiteConfig.seo.pages[pageName]) {
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', SiteConfig.seo.pages[pageName].description);
        }
    }

    // Update meta author
    const metaAuthor = document.querySelector('meta[name="author"]');
    if (metaAuthor) {
        metaAuthor.setAttribute('content', SiteConfig.seo.defaultAuthor);
    }

    // Update meta URL
    const metaUrl = document.querySelector('meta[name="url"]');
    if (metaUrl) {
        metaUrl.setAttribute('content', SiteConfig.site.url);
    }
});

/**
 * Get page name from current URL
 */
function getPageName() {
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1);

    if (!filename || filename === '' || filename === 'index.html') {
        return 'index';
    }

    // Remove .html extension and return
    return filename.replace('.html', '').replace(/-/g, '_');
}
